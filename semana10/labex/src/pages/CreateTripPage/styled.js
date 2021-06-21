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
    margin-left: 5vw;
    width: 53%;
`
export const CreateButton = styled.button `
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
export const FormContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 60vh;
    margin-top: 10vh;
`

export const SelectContainer = styled.select `
    background-color: rgb(255, 255, 255, 0.3);
    width: 15%;
    height: 5vh;
    border: none;
    border-radius: 5px;
`

export const InputContainer = styled.input `
    background-color: rgb(255, 255, 255, 0.3);
    width: 15%;
    height: 5vh;
    border: none;
    border-radius: 5px;
`