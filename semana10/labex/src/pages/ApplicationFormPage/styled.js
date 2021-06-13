import styled from 'styled-components';
import ceu from '../../img/ceu.jpg';

export const MainContainer = styled.div `
    background-image: url(${ceu});
    background-size: cover;
    height: 100vh;
`
export const TopContainer = styled.div `
    display: flex; 
    justify-content: space-between;
    width: 65%;
`

export const FormContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 70vh;
`

export const SendButton = styled.button `
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
    margin-bottom: 5vh;
`