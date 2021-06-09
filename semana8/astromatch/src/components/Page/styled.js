import styled from 'styled-components';


export const Container = styled.div `
  background-color: lightpink;
  height: 550px;
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 20px;
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