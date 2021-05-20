import styled from 'styled-components';

export const List = styled.div  `
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30vh;
`

export const Buttons = styled.div `
    display: grid;
    grid-template-columns: 1fr 0.2fr;
    column-gap: 2vw;
`

export const Home = styled.div `
    display: flex;
    justify-content: center;
    align-content: flex-end;
    margin-top: 8vh;
`


export const Main = styled.div `
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30vw;
    height: 70vh;
    margin: auto;
    margin-top: 15vh;
`

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vh;
    width: 80%;
`


export const Title = styled.div `
    margin-bottom: 5vh;
`