import { useQuery } from "@tanstack/react-query";
import api from "../services/api";
import {
  Container,
  GridContainer,
  Header,
  InfoContainer,
  Main,
  OverLayer,
  Section1,
} from "./styled";
import Logo from "./logo.svg";
import Banner from "./banner.mp4";
import ArrowDow from "./ArrowDow.svg";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-default/dist/all.css";

/* interface IdataProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
} */

export const Home = () => {
  const imageURL = "https://image.tmdb.org/t/p/w500/";

  const query = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await api.get("/top_rated?language=en-US&page=1");

      return response.data;
    },
  });

  const dataState = {
    sort: [{ field: "code", dir: "asc" }],
    take: 10,
    skip: 0,
  };

  return (
    <Container>
      <Header>
        <img src={Logo} alt="Logo" />
      </Header>
      <Section1>
        <video src={Banner} loop autoPlay muted />
        <OverLayer>
          <InfoContainer>
            <div>
              <h1>Desafio para vaga de Front-end</h1>
              <button>
                Ver Tabela <img src={ArrowDow} alt="" />
              </button>
            </div>
          </InfoContainer>
        </OverLayer>
      </Section1>
      {query.isLoading ? (
        <div>Loading</div>
      ) : (
        <Main>
          <GridContainer>
            <Grid data={query.data.results}>
              <Column field="title" title="Title" />
              <Column field="original_language" title="Língua" />
              <Column field="release_date" title="Data de Lançamento" />
              <Column field="vote_average" title="Nota" />
              <Column field="vote_average" title="Votos" />
            </Grid>
          </GridContainer>
        </Main>
      )}
    </Container>
  );
};
