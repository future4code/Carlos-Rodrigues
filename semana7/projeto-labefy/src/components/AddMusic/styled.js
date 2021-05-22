import styled from 'styled-components';

export const Header = styled.div `
    border: 2px solid blue;
    height: 20vh;
`

export const Body = styled.div `
    height: 68vh;
    border: 2px solid yellow;
    display: flex;
`

export const Nav = styled.div `
    border: 2px solid orange;
    width: 20%;
`

export const Container = styled.div `
    border: 2px solid lightgreen;
    width: 80%;
    display: grid;
    grid-template-rows: 1fr 2fr;
    row-gap: 10vh;
    justify-content: center;
`
export const Title = styled.div `
    border: 2px solid beige;
    display: flex;
    justify-content: center;
`
export const Content = styled.div `
    border: 2px solid gray;
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`
export const Footer = styled.div `
    border: 2px solid lightblue;
    height: 10vh;
`