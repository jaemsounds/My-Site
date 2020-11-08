import React, {useState, useEffect} from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import AudioPlayer from 'react-h5-audio-player';
import '../styles/styles.css';
import styled from 'styled-components';
// components
import {downloadAUrl} from 'better-file-downloads';

// styles

import {
  MediaPlayerWrapper,
  AudioPlayerContainer,
  CoverContainer,
  List,
  Image,
  Title,
  Meta,
  Sub,
  Download,
} from './MusicPlayerStyles';
const cloud = require('../../images/download.png');

const MusicPlayerItems = () => {
  const [playlist, setPlaylist] = useState([{}]);
  const [currentMusicIndex, setMusicIndex] = useState(0);
  const data = useStaticQuery(graphql`
    query getAlbum {
      wordpress {
        album(id: "main-player", idType: SLUG) {
          id
          albumTracks {
            track {
              title
              file {
                mediaItemUrl
              }
              cover {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `);
  useEffect(() => {
    async function getTracks() {
      const tracks = await data.wordpress.album.albumTracks.track;
      let temp = [];
      tracks.forEach((item) =>
        temp.push({
          name: item.title,
          src: item.file.mediaItemUrl,
          cover: item.cover.mediaItemUrl,
        }),
      );
      setPlaylist(temp);
    }
    getTracks();
  }, [data.wordpress.album.albumTracks.track]);

  const handleClickPrevious = () => {
    setMusicIndex(
      currentMusicIndex === 0 ? playlist.length - 1 : currentMusicIndex - 1,
    );
  };
  const handleClickNext = () => {
    setMusicIndex(
      currentMusicIndex < playlist.length - 1 ? currentMusicIndex + 1 : 0,
    );
  };
  const download = async (url) => {
    await downloadAUrl(url, {
      fileName: `${playlist[currentMusicIndex].name}`,
      extension: '.mp3',
      contentType: 'application/mp3',
    });
  };

  return (
    <MediaPlayerWrapper>
      <CoverContainer>
        {playlist.map((song, i) => (
          <List
            role='menuitem'
            tabIndex={0}
            onClick={() => setMusicIndex(i)}
            onKeyPress={() => {}}
            key={i}
            className={`${currentMusicIndex === i && 'playing'}`}
          >
            {currentMusicIndex === i && (
              <i className='fa fa-play' aria-hidden='true' />
            )}
            <Meta>
              <Image src={song.cover} alt='cover' />
              <Title>
                <Sub>Now Playing:</Sub>
                {song.name}
                <Download>
                  <CloudStyle
                    type='button'
                    onClick={() =>
                      download(`${playlist[currentMusicIndex].src}`)
                    }
                  >
                    <img
                      style={{height: '2rem', width: '2rem'}}
                      src={cloud}
                      alt='download'
                    />
                  </CloudStyle>
                </Download>
              </Title>
            </Meta>
          </List>
        ))}
      </CoverContainer>

      <AudioPlayerContainer>
        <AudioPlayer
          showSkipControls={true}
          showJumpControls={false}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          onEnded={handleClickNext}
          src={playlist[currentMusicIndex].src}
          volume={0.4}
        />
      </AudioPlayerContainer>
    </MediaPlayerWrapper>
  );
};

const CloudStyle = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dc143c;
  text-decoration: none;
  border-radius: 50%;
`;

export default MusicPlayerItems;
