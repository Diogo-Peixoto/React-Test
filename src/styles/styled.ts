import styled from "styled-components";

export const Container = styled.div`
  color: white;
  font-family: Arial, Helvetica, sans-serif;

  max-width: 90%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  button {
    height: 30px;
    width: 150px;
    margin-inline: 5px;
    border-radius: 5px;
    background-color: white;
    font-size: 14px;
  }
`;
