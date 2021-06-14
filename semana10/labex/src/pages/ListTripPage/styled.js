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
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-left: 5vw;
`

