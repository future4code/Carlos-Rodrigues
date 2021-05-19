import styled from 'styled-components';

export const List = styled.div  `
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-top: 3vh;
`

export const Buttons = styled.div `
    display: grid;
    grid-template-columns: 1fr 0.2fr;
    column-gap: 2vw;
`

export const Title = styled.div `
    text-align: center;
`

export const Container = styled.div `
    min-height: 60vh;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
    margin: auto;
    margin-top: 25vh;
`

export const Home = styled.div `
    display: flex;
    justify-content: center;
    padding-top: 5vh;
`
