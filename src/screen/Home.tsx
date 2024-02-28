import { useQuery } from "@tanstack/react-query";
import api from "../services/api";
import { Container, Header, Section1 } from "./styled";
import Logo from "./logo.svg";
import Banner from "./banner.mp4";

export const Home = () => {
  /* const query = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await api.get("/top_rated?language=en-US&page=1");

      return response.data;
    },
  }); */

  return (
    <Container>
      <Header>
        <img src={Logo} alt="Logo" />
      </Header>
      <Section1>
        <video src={Banner} loop autoPlay muted />
        {/* <div>
          <div>
            <h1>Desafio para vaga de FrontEnd</h1>
            <button>Ver Tabela</button>
          </div>
        </div> */}
      </Section1>
      <main></main>
    </Container>
  );
};
