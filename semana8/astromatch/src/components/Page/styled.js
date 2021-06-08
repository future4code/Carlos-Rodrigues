import styled from 'styled-components';


export const Container = styled.div `
  background-color: lightpink;
  height: 70vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 15vh;
`
export const Bar = styled.div `
  background-color: purple;
  height: fit-content;
  width:100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`
export const Content = styled.div `
  background-color: lightblue;
  flex-grow: 1;
  margin-top: 2vh;
  margin-bottom: 2vh;
  margin-right: 2vh;
  margin-left: 2vh;
`