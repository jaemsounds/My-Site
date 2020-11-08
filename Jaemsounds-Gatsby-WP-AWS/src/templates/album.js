import React, { useState, useEffect } from "react"
import AudioPlayer from "react-h5-audio-player"
// utils
import { MediaPlayerWrapper, AudioPlayerContainer, CoverContainer} from '../components/MusicPlayer/MusicPlayerStyles';
import { Wrapper, CardWrapper } from './templateStyles';
// components
import Layout from '../components/layout';
const Album = ({pageContext}) => {
    const [playlist, setPlaylist] = useState([{}])
    const [currentMusicIndex, setMusicIndex] = useState(0)
    
    useEffect(() => {
        async function getTracks() {
          const tracks = await pageContext.albumTracks.track
          let temp = []
          tracks.forEach(item =>
            temp.push({
              name: item.title,
              src: item.file.mediaItemUrl,
             cover: item.cover.mediaItemUrl,
            })
          )
          setPlaylist(temp)
        }
        getTracks()
      }, [pageContext.albumTracks.track  ])
    
      const handleClickPrevious = () => {
        setMusicIndex(
          currentMusicIndex === 0 ? playlist.length - 1 : currentMusicIndex - 1
        )
      }
      const handleClickNext = () => {
        setMusicIndex(
          currentMusicIndex < playlist.length - 1 ? currentMusicIndex + 1 : 0
        )
      }
    return (
        <Layout>
          <Wrapper>
            <CardWrapper>
    <MediaPlayerWrapper>
    <div>
        <ul style={{ width: "100%" }}>
          {playlist.map((song, i) => (
            <li
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              role="menuitem"
              tabIndex={0}
              onClick={() => setMusicIndex(i)}
              onKeyPress={() => {}}
              key={i}
              className={`${currentMusicIndex === i && "playing"}`}
            >
              {currentMusicIndex === i && (
                <i className="fa fa-play" aria-hidden="true"></i>
              )}
              &nbsp;
              <CoverContainer>
                <p>{song.name}</p>
                <img src={song.cover} alt="cover" /> 
              </CoverContainer>
            </li>
          ))}
        </ul>
      </div>
      <AudioPlayerContainer>
        <AudioPlayer
          showSkipControls={true}
          showJumpControls={false}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          onEnded={handleClickNext}
          src={playlist[currentMusicIndex].src}
          volume={0.8}
        />
      </AudioPlayerContainer>
    </MediaPlayerWrapper>
    </CardWrapper>
    </Wrapper>
        </Layout>
    )
}

export default Album; 

