import { useEffect } from "react";

/* import "@progress/kendo-theme-material/dist/all.css"; */
import "./styles/reset.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./screen/Home";
import api from "./services/api";
import { Desafio } from "./Desafio";

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
      {/* <Home /> */}
      <Desafio />
    </QueryClientProvider>
  );
}

export default App;
