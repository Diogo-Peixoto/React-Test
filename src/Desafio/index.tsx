import {
  Container,
  ItemMobile,
  Table,
  Td1,
  Td2,
  Td3,
  Td4,
  Td5,
} from "./styled";
import car from "./car.png";
import star from "./star.svg";
import dots from "./dots-vertical.svg";
import indicator from "./Indicators.svg";
import data from "./data.json";

export const Desafio = () => {
  return (
    <Container>
      {/* <ul>
        {array.map(() => {
          return (
            <ItemMobile>
              <img src={car} alt="car" />
              <div>
                <p>Mini Cooper 2020</p>
                <span>Next reservation: 11/07</span>
                <Td4>
                  <div>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </Td4>
              </div>

              <img src={dots} alt="" className="options" />
              <img src={indicator} alt="" className="indicator" />
            </ItemMobile>
          );
        })}
      </ul> */}

      <Table>
        <thead>
          <tr>
            <th>CAR</th>
            <th>NEXT RESERVATION</th>
            <th>STATUS</th>
            <th>RATING</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <Td1>
                  <img src={car} alt="car" />
                  <p>{item.title}</p>
                </Td1>
                <Td2>{item.date}</Td2>
                <Td3>
                  <p>{item.status}</p>
                </Td3>
                <Td4>
                  <div>
                    {Array.from({ length: item.rating }).map(() => {
                      return <img src={star} alt="" />;
                    })}
                  </div>
                </Td4>
                <Td5>
                  <img src={dots} alt="" />
                </Td5>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
