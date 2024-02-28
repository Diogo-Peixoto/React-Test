import { useEffect, useState } from "react";

import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-material/dist/all.css";
import "./styles/reset.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Home } from "./screen/Home";
import api from "./services/api";

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

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    api.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
