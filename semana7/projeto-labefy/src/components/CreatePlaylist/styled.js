import styled from 'styled-components';
import teste from '../img/teste.jpg';

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
export const Body = styled.div `
    height: 80vh;
    display: flex;
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
        opacity: 0.5
    }
`

export const Playlist = styled.h3 `
    cursor: pointer;
    height: 8vh;
    display: flex;
    align-items: center;
    :hover{
        opacity: 0.5
    }
`
export const Title = styled.div `
    display: flex;
    justify-content: center;
    margin-top: 5vh;
    color: white;
`
export const Content = styled.div `
    border-radius: 10px;
    background-color: orange;
    opacity: 0.75;
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15vh;
    margin-top: 15vh;
`
export const ContainerCreate = styled.div `
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: white;
`
export const Button = styled.button `
    width: 6vw;
    height: 5vh;
    border-radius: 12%;
    border: none;
    background-color: black;
    color: white;
    box-shadow: 2px 2px black;
    cursor: pointer;
`
export const Footer = styled.div `
    height: 10vh;
    /* background-color: #C6C6C6; */
    background-color: #45525B;
`
//
export const Input = styled.div `
    margin-left: 5vw;
    margin-right: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Nav = styled.div `
    width: 100%;
    background-color: black;
    color: orange;
    height: 10vh;
    display: flex;
`
export const NavOptions = styled.div `
    height: 100%;
    display: flex;
    flex-grow: 1;
    justify-content: space-evenly;
    align-items: center;
`
export const Container = styled.div `
    width: 100vw;
    display: grid;
    /* grid-template-rows: 1fr 2fr; */
    /* row-gap: 10vh; */
    justify-content: center;
    background-color: #BCCBD5;
    background-image: url(${teste});
    background-repeat: no-repeat;
    background-size: cover;
`
export const PlaylistInput = styled.input `
    border: none;
    border-radius: 20px;
    width: 15vw;
    height: 5vh;
    outline: none;
`
