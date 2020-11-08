import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  @media only screen and (min-device-width: 300px) {
    align-items: center;
  }
  @media only screen and (min-device-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 2.5px;

  @media only screen and (min-device-width: 300px) {
    margin: 10px 0px 10px 0px;
    width: 90%;
    padding: 10px;
    text-align: right;
  }

  @media only screen and (min-device-width: 768px) {
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    height: 450px;
    height: 100%;
  }
`;

export const CardWrapper = styled.div`
  border-radius: 2.5px;
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  @media only screen and (min-device-width: 300px) {
    width: 90%;
  }
  @media only screen and (min-device-width: 768px) {
    width: 80%;
  }
`;

export const Title = styled.h1`
  text-decoration: underline;
`;

export const More = styled.div`
  text-align: center;
  background-color: #dc143c;
  padding: 10px;
  border-radius: 2.5px;
  a {
    text-decoration: none;
    color: white;
  }
`;

export const Price = styled.div`
  font-size: 28px;
  margin: 10px 0px 10px 0px;
  text-align: right;
`;
export const Download = styled.button`
  text-align: center;
  background-color: crimson;
  padding: 10px;
  color: white;
  width: 100%;
  a {
    text-decoration: none;
    color: white;
  }
  :hover {
    cursor: pointer;
  }
`;

export const DownloadWrapper = styled.div`
  margin: 20px 0px 20px 0px;
`;
export const PayPalWrapper = styled.div`
  display: inline;
  background-color: white;
  height: auto;
`;

export const Top = styled.div`
  @media only screen and (min-device-width: 300px) {
    width: 65%;
  }
`;
export const Center = styled.div``;
export const Cover = styled.img``;
export const Content = styled.div`
  height: 50%;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
`;
export const AudioPlayerWrapper = styled.div`
  width: 100%;
`;
