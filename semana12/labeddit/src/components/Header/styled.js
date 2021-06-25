import styled from "styled-components";
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { thirdColor } from "../../constants/colors";
import Typography from '@material-ui/core/Typography';

export const ButtonHomeContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 20%;
    margin-right: 5vw;
`

export const StyledButton = styled(Button) `
    :hover {
        opacity: 0.3
    }
    border-color: ${thirdColor};
    color:  ${thirdColor};
`

export const ToolbarDiv = styled(Toolbar) `
    display: flex;
    justify-content: space-between;
    margin-left: 5vw;
`

export const ButtonContainer = styled.div `
    margin-right: 5vw;
`

export const FeedTypography = styled(Typography) `
    cursor: pointer;
`