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
  height: 100%;
  box-sizing: border-box;

  video {
    width: 100%;
    height: inherit;
  }
`;
