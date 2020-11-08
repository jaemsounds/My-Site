import React from "react"
import MusicPlayerItems from "./MusicPlayerItems"
import styled from "styled-components"

const MusicPlayer = () => {
  return (
    <MusicPlayerContainer>
      <MusicPlayerItems />
    </MusicPlayerContainer>
  )
}

const MusicPlayerContainer = styled.div`
  padding: 1rem;
  @media only screen and (min-device-width: 768px) {
    width: 80%;
  }
`

export default MusicPlayer
