import styled from 'styled-components';
import ceu from '../../img/ceu.jpg';

export const MainContainer = styled.div `
    background-image: url(${ceu});
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`