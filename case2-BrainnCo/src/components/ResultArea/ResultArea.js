import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import {
  Main,
  ResultContainer,
  SortedNumber,
  Warning,
  WarningContainer,
} from "./styled";

const ContestResult = () => {
  const { result } = useContext(GlobalStateContext);

  const renderResult = () => {
    return (
      result &&
      result.numeros &&
      result.numeros.map((number) => {
        return <SortedNumber key={number}> {number}</SortedNumber>;
      })
    );
  };
  return (
    <Main>
      <ResultContainer>{renderResult()}
      </ResultContainer>
      <WarningContainer>
        <Warning>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA
        </Warning>
      </WarningContainer>
    </Main>
  );
};

export default ContestResult;
