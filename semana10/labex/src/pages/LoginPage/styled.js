import styled from 'styled-components';
import ceu from '../../img/ceu.jpg';

export const MainContainer = styled.div `
    background-image: url(${ceu});
    background-size: cover;
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`
export const TopContainer = styled.div `
    margin-left: 5vw;
    display: flex;
    justify-content: space-between;
    width: 48%;
`
export const LoginContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-height: 200px;
`
export const LoginButton = styled.button `
    background-color: #3F51B5;
    color: white;
    height: 5vh;
    width: 7vw;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    :hover {
        background-color: #303F9F
    }
`