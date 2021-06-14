import styled from 'styled-components';
import ceu from '../../img/ceu.jpg';

export const Header = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const MainContainer = styled.div `
    background-image: url(${ceu});
    background-size: cover;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`
export const TopContainer = styled.div `
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-left: 5vw;
`

export const ButtonContainer = styled.div `
    display: flex;
    justify-content: space-between;
    width: 20%;
    margin-left: 40%;
`

export const White = styled.div `
    background-color: rgb(255, 255, 255, 0.);
    height: 100vh;
`