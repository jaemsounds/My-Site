import React, {useState} from 'react';
import Layout from '../components/layout';
import {
  Wrapper,
  CardWrapper,
  Title,
  Cover,
  Content,
  Download,
  Price,
} from './templateStyles';
import {PayPalButton} from 'react-paypal-button-v2';
import {downloadAUrl} from 'better-file-downloads';

const Beat = ({pageContext}) => {
  const amount = pageContext.beatsInfo.price;
  const description = pageContext.beatsInfo.title;
  const [paidFor, setPaidFor] = useState(false);
  const Styles = {
    color: 'white',
    textDecoration: 'none',
    backgroundColor: 'crimson',
    padding: '15px',
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
    marginTop: '10px',
    marginBottom: '10px',
    display: 'block',
    cursor: 'pointer',
    height: '50%',
  };

  const download = async (url) => {
    await downloadAUrl(url, {
      fileName: `${pageContext.beatsInfo.track.mediaItemUrl}`,
      extension: '.mp3',
      contentType: 'application/mp3',
    });
  };
  return (
    <React.Fragment>
      <Layout>
        {paidFor ? (
          <Wrapper>
            <CardWrapper>
              <Title>Thanks for your purchase!</Title>
              <Content>
                Please click on the link below to download
                <br />
                <span style={{color: 'crimson', fontSize: 48}}>
                  {pageContext.beatsInfo.title}
                </span>
              </Content>
              <Download
                styles={Styles}
                onClick={() =>
                  download(`${pageContext.beatsInfo.track.mediaItemUrl}`)
                }
              >
                {' '}
                Download{' '}
              </Download>
              <Content>
                If you have any issues please email: jaemsounds@gmail.com
              </Content>
            </CardWrapper>
          </Wrapper>
        ) : (
          <Wrapper>
            <CardWrapper>
              <Cover src={pageContext.beatsInfo.cover.mediaItemUrl} />
              <Title>{pageContext.beatsInfo.title}</Title>
              <Content
                dangerouslySetInnerHTML={{__html: pageContext.content}}
              />
              <Price style={{marginBottom: '20px'}}>
                Buy Now for: ${pageContext.beatsInfo.price}
              </Price>
              <PayPalButton
                components='buttons'
                style={{
                  layout: 'vertical',
                }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        description: description,
                        amount: {
                          currency_code: 'USD',
                          value: amount,
                        },
                      },
                    ],
                  });
                }}
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {
                  setPaidFor(true);
                  alert(
                    'Thank you for your purchase ' +
                      details.payer.name.given_name +
                      details.payer.name.surname +
                      '  an email will be sent to ' +
                      details.payer.email_address,
                  );
                  // OPTIONAL: Call your server to save the transaction
                  return fetch('/paypal-transaction-complete', {
                    method: 'post',
                    body: JSON.stringify({
                      orderId: data.orderID,
                    }),
                  });
                }}
                options={{
                  clientId:
                    'Ab29MjF5S52UC5oiAE8vmeiabFi36wRNRhsbHj_OcqXmw0gddA8_SZaZV-6WfnzibkA0a_97rMKmEUkt',
                }}
              />
            </CardWrapper>
          </Wrapper>
        )}
      </Layout>
    </React.Fragment>
  );
};

export default Beat;
