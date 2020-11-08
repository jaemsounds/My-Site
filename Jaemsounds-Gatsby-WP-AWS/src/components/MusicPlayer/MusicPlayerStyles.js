import styled from "styled-components";

export const MediaPlayerWrapper = styled.div`
  width: 100%;
`

export const AudioPlayerContainer = styled.div`
height: auto;
display:block;
  @media only screen and (min-device-width: 320px) {
    padding: 10px;
  }
`

export const CoverContainer = styled.div`
display: block;
  @media only screen and (min-device-width: 320px) {
    margin-top: 1rem;
    height: 200px;
    overflow-y: scroll;
    color: black;
    padding: 10px;
  }
  ::-webkit-scrollbar {
    width: 10px;               /* width of the entire scrollbar */
  }
  ::-webkit-scrollbar-track {
    background:transparent;        /* color of the tracking area */
  }
  ::-webkit-scrollbar-thumb {
    background-color: black;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
  }
`
export const Sub = styled.span`
  display: none;
`
export const Download = styled.span`
  display: none;

`
export const List = styled.li`
   
    width: 100%;
    height: 100px;
    background-color: rgba(232, 234, 235, 0.7);
    cursor: pointer;
    list-style: none;
    
    &.playing {
      background-color: white;
      ${Sub} {
        display: block;
      }
      ${Download} {
        @media (min-width: 320px) {
          display: none;
          width: 10px;
          height: 10px;
          float: right;
        }
        @media (min-width: 768px) {
          display: block;
        }
        
        @media (min-width: 960px) {
            
        }
        
      
        float: right;
        width: 24px;
        height: 24px;
      }
    }

    .song-duration {
      float: right;
    }

    &:hover {
      background-color: #eeeeee70;
    }

    .fa-play {
      color: purple;
    }
  
`
export const Title = styled.div`
@media (min-width: 320px) {
  font-size: 18px;
  letter-spacing: 0.1rem;
}

@media (min-width: 768px) {
  
}

@media (min-width: 960px) {
  font-size: 24px;
}

 
  font-family: "Bebas Neue", cursive;
  letter-spacing: 0.4rem;
  align-self: center;
`
export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin: 0px 10px 0px 0px;
`

export const Meta = styled.div`
  width: 100%;

  display: flex;
`
export const SectionWrapper = styled.div`
  width: 100%;
  display:block;
  background-color: red;
  height: 200px;
`