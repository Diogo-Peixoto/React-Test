import { useReducer } from "react";
import { Container } from "./styles/styled";

interface IActionProps {
  type: "ADD_NUMBER" | "SUB_NUMBER" | "Mult_NUMBER";
  payload: { number: number };
}

function App() {
  //state = valor atual
  const [number, dispatch] = useReducer(
    (state: number, action: IActionProps) => {
      if (action.type === "ADD_NUMBER") {
        return state + action.payload.number;
      }
      if (action.type === "SUB_NUMBER") {
        return state - action.payload.number;
      }
      if (action.type === "Mult_NUMBER") {
        return state * action.payload.number;
      }

      return state;
    },
    0,
  );

  const handleAdd = () => {
    dispatch({
      type: "ADD_NUMBER",
      payload: {
        number: 5,
      },
    });
  };

  const handleSub = () => {
    dispatch({
      type: "SUB_NUMBER",
      payload: {
        number: 1,
      },
    });
  };

  const handleMul = () => {
    dispatch({
      type: "Mult_NUMBER",
      payload: {
        number: 2,
      },
    });
  };

  return (
    <Container>
      <h1>
        Usado para gerenciar dados complexos que ocorrem muitas alterações
        custosas (com muito codigo) em diferentes lugares.
      </h1>

      <h3>Number: {number}</h3>

      <div>
        <button onClick={handleAdd}>+ 5</button>
        <button onClick={handleMul}>* 2</button>
        <button onClick={handleSub}>- 1</button>
      </div>
    </Container>
  );
}

export default App;
