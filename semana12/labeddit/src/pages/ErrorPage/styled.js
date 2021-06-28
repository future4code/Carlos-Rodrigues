import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { thirdColor } from "../../constants/colors";

export const ErrorContainer = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding-top: 5vh;
    height: 95vh;
`

export const StyledButton = styled(Button) `
    :hover {
        opacity: 0.3
    }
    border-color: black;
    color:  ${thirdColor};
    background-color: black;
    font-weight: bold;
`