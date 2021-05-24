import styled from 'styled-components';
import teste from '../img/teste.jpg'

export const Header = styled.div `
    height: 10vh;
    display: flex;
    align-items: center;
    background-color: #E3E8EB;
`

export const HeaderTitle = styled.h3 `
    margin-left: 2vw;
`

export const Img = styled.img `
    width: 5vw;
    height: 10vh;
    margin-left: 2vw;
`

export const NavOptions = styled.div `
    height: 100%;
    display: flex;
    flex-grow: 1;
    justify-content: space-evenly;
    align-items: center;
`

export const Home = styled.h3 `
    cursor: pointer;
    height: 8vh;
    display: flex;
    justify-content: center;
    flex-grow: 0.1;
    align-items: center;
    /* background-color: #E3E8EB; */
    :hover{
        opacity: 0.5
    }
`
export const Create = styled.h3 `
    /* background-color: #FE7E02; */
    cursor: pointer;
    height: 8vh;
    display: flex;
    align-items: center;
    :hover{
        opacity: 0.2
    }
`

export const Playlist = styled.h3 `
    cursor: pointer;
    height: 8vh;
    display: flex;
    align-items: center;
    :hover{
        opacity: 0.2
    }
`
export const Body = styled.div `
    height: 80vh;
    display: flex;
`

export const Nav = styled.div `
    width: 100%;
    background-color: black;
    color: orange;
    height: 10vh;
    display: flex;
`
export const Input = styled.div `
    margin-left: 5vw;
    margin-right: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Container = styled.div `
    width: 100vw;
    display: grid;
    justify-content: center;
    background-image: url(${teste});
    background-repeat: no-repeat;
    background-size: cover;
`
export const Title = styled.div `
    display: flex;
    justify-content: center;
    margin-bottom: 10vh;
`
export const Content = styled.div `
    width: 30vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: orange;
    opacity: 0.75;
    border-radius: 10px;
    text-indent: 1vw;
    margin-top: 10vh;
    color:white;
`
export const Footer = styled.div `
    height: 10vh;
    background-color: #45525B;
`
