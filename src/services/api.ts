import axios from "axios";

//Passar chaves para o ENV

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTFiODgyMDA1MDM0OTIzN2I2OWQzMzc5ZjYwMjVkYyIsInN1YiI6IjY1ZGRjYzhkODlkOTdmMDE3Yzk5M2MzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IgUaPnPNoHlEdbnu20ViDDnF91zevZDzrIgojVUnmZw",
  },
});

export default api;
