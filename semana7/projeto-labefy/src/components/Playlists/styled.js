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

export const Body = styled.div `
    min-height: 90vh;
    max-height: fit-content;
    display: flex;
`
export const Title = styled.div `
    display: flex;
    justify-content: center;
    height: fit-content;
    color: white;
    width: 100%;
`
export const Content = styled.div `
    width: 70vw;
    background-color: orange;
    opacity: 0.8;
    margin-top: 10vh;
    margin-bottom: 10vh;
    border-radius: 10px;
`
export const ContainerPlaylist = styled.div `
    width: 25vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    border-radius: 10px;
    color: white;
    margin-left: 4vw;
    margin-right: 3vw;
    padding-right: 2vw;
    background-color: black;
    margin-top: 2vh;
`
export const ButtonsPlaylist  = styled.div `
    width: 15vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Buttons =  styled.button `
    border-radius: 10%;
    height: 4vh;
    border: none;
    background-color: #FE7E02;
    color: white;
    box-shadow: 2px 2px black;
`
export const Footer = styled.div `
    height: 10vh;
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
    display: flex;
    justify-content: center;
    background-image: url(${teste});
    background-repeat: no-repeat;
    background-size: cover;
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
export const List = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
`