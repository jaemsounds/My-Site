import React, {useState, useEffect} from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import AudioPlayer from 'react-h5-audio-player';

// styling
import {
  Wrapper,
  CardWrapper,
  More,
  Card,
  Cover,
  Price,
  Content,
  Title,
  Top,
  AudioPlayerWrapper,
  Center,
} from '../templates/templateStyles';
const Beats = () => {
  const [beatInfo, setBeatInfo] = useState([{}]);
  const data = useStaticQuery(graphql`
    query getAllBeats {
      wordpress {
        beats {
          nodes {
            slug
            title
            content
            beatsInfo {
              cover {
                mediaItemUrl
              }
              price
              title
              track {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `);
  useEffect(() => {
    async function getBeats() {
      const beats = await data.wordpress.beats.nodes;
      let temp = [];
      beats.forEach((item) =>
        temp.push({
          link: item.slug,
          content: item.content,
          cover: item.beatsInfo.cover.mediaItemUrl,
          name: item.beatsInfo.title,
          price: item.beatsInfo.price,
          track: item.beatsInfo.track.mediaItemUrl,
        }),
      );
      setBeatInfo(temp);
    }
    getBeats();
  }, [data.wordpress.beats.nodes]);
  // console.log(data);
  return (
    <Layout>
      <Wrapper>
        {beatInfo.map((item, i) => (
          <Card key={i}>
            {/* {console.log('Item', item)} */}
            <Top>
              <Cover src={item.cover} />
            </Top>
            <Title>{item.name}</Title>
            <Content dangerouslySetInnerHTML={{__html: item.content}} />
            <AudioPlayerWrapper>
              <AudioPlayer
                customAdditionalControls={[]}
                customVolumeControls={[]}
                src={item.track}
              />
            </AudioPlayerWrapper>

            <Price>${item.price}</Price>
            <More>
              <a href={`/beat/${item.link}`}> Purchase Beat</a>
            </More>
          </Card>
        ))}
      </Wrapper>
    </Layout>
  );
};

export default Beats;
