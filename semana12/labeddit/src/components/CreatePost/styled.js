import styled from "styled-components";
import { TextField } from '@material-ui/core';


export const CreateContainer = styled.div `
    box-shadow: 3px 3px 3px 3px;
    background-color: rgb(255, 255, 255, 0.15);
    border: 0 none;
    outline: 0;
    border-radius: 10px;
    margin-top: 2vh;
    padding-bottom: 1.5vh;
    padding-top: 2vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const StyledField = styled(TextField) `
    width: 80%;
    color: red;
`