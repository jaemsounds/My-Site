import addToMailchimp from 'gatsby-plugin-mailchimp';
import React, {useState} from 'react';
import styled from 'styled-components';

const MailChimpForm = () => {
  const [email, setEmail] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(email);
    setEmail(result);
    setRegistered(true);
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Wrapper>
      {registered ? (
        <div>
          Thanks for registering! Please check your email for more info.
        </div>
      ) : (
        <div>
          <Form>
            <h1>
              <span style={{color: 'crimson'}}>Register</span> here to be
              notified of my monthly newsletter.
            </h1>
            <FormGroup onSubmit={handleSubmit}>
              <InputForm
                label='Email'
                type='email'
                name='email'
                placeholder='Email Address'
                autoComplete='email'
                onChange={handleChange}
                required
              />
              <br />
              <Button type='submit'>Register</Button>
            </FormGroup>
          </Form>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 100%;
  color: black;
  font-size: 1.5rem;
  padding: 1rem;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 1rem;
  @media only screen and (min-device-width: 320px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

const InputForm = styled.input`
  font-size: 20px;
  height: 45px;
  width: 100%;
  border: 0;
  outline: 0;
  border-bottom: 2px solid black;
  background: transparent;
`;

const FormGroup = styled.form`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  @media only screen and (min-device-width: 320px) {
    width: 100%;
  }
  @media only screen and (min-device-width: 768px) {
    width: 50%;
  }
`;
const Button = styled.button`
  font-size: 20px;
  cursor: pointer;
  margin-top: 5px;
  background-color: #dc143c;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  @media only screen and (min-device-width: 320px) {
    width: 50%;
  }
`;

export default MailChimpForm;
