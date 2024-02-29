import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  ul {
    width: 100%;
  }
`;

export const Table = styled.table`
  width: 96%;

  max-width: 1376px;

  border-radius: 8px;
  box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);

  thead {
    background-color: #f9fafb;

    font-size: 12px;
    font-weight: 600;
    color: #6b7280;

    th {
      height: 50px;
      padding-left: 25px;
    }
  }

  tr {
    display: grid;
    grid-template-columns: 0.9fr repeat(3, 1fr) 0.3fr;
    grid-template-rows: 1fr;
  }

  th {
    display: flex;
    align-items: center;
  }

  tbody {
    td {
      display: flex;
      align-items: center;

      height: 54px;
      border-top: solid 1px #e5e7eb;
      padding-left: 25px;

      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
    }
  }
`;

export const Td1 = styled.td`
  display: flex;
  align-items: center;
  gap: 10px;

  min-width: 194px;

  img {
    width: inherit;
    height: 46px;
  }
`;

export const Td2 = styled.td`
  color: #6b7280;
`;

export const Td3 = styled.td`
  p {
    width: 72px;
    height: 22px;
    border-radius: 5px;
    background-color: #def7ec;
    color: #03543f;

    font-size: 12px;
    font-weight: 500;
    line-height: 18px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Td4 = styled.td`
  div {
    display: flex;
    gap: 5px;
  }
`;

export const Td5 = styled.td`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemMobile = styled.div`
  height: 101px;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 20px;

  border-bottom: solid 1px #e5e7eb;

  position: relative;

  p {
    font-size: 16px;
    font-weight: 600;
  }

  span {
    color: rgba(107, 114, 128, 1);
    font-size: 12px;
  }

  & > img {
    width: 85px;
    height: 85px;

    object-fit: contain;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .options {
    position: absolute;
    top: 5px;
    right: 0;

    width: 24px;
    height: 24px;
  }

  .indicator {
    position: absolute;
    top: 10px;
    left: 3px;

    width: 24px;
    height: 24px;
  }
`;
