import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: grid;
  grid-template-rows: 80px 1fr;

  background-color: #d9d9d9;
`;

export const Header = styled.header`
  height: 100%;
  background-color: white;
  padding-left: 40px;

  display: flex;
  align-items: center;
`;

export const Section1 = styled.section`
  max-width: 100%;
  height: calc(100vh - 80px);
  box-sizing: border-box;

  position: relative;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const OverLayer = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;

  background: linear-gradient(
    89.97deg,
    #001933 0.03%,
    rgba(0, 25, 51, 0) 99.98%
  );
`;

export const InfoContainer = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;

  h1 {
    width: 343px;
    font-size: 56px;
    font-weight: 600;
    line-height: 130%;
    color: white;
  }

  button {
    padding: 18px 33px;
    border-radius: 100px;
    background-color: white;
    color: black;
    font-size: 16px;
    font-weight: bolder;

    border: none;

    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 30px;
`;

export const GridContainer = styled.div`
  width: 80%;
`;
