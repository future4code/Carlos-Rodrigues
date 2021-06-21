import styled from 'styled-components';
import ceu from '../../img/ceu.jpg';

export const HomeContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    max-width: 35vw;
    min-height: 30vh;
    max-height: 40vh;
    border-radius: 10px;
    background-color: rgb(255, 255, 255, 0.4); 
`
export const HomeButtonContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-around;
`

export const MainContainer = styled.div `
    background-image: url(${ceu});
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`
