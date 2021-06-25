import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToSignUp, goToLogin, goToFeed} from '../../routes/coordinator';
import AppBar from '@material-ui/core/AppBar';
import { ButtonHomeContainer, ToolbarDiv, StyledButton, ButtonContainer, FeedTypography } from './styled';

export default function Header({title}) {
    const history = useHistory()

    const onClickLogout = () => {
        localStorage.removeItem("token")
        history.push("/")
    }
    

    const showHeader = () => {
        if (title === "home") {
            return (
                <ButtonHomeContainer>
                    <StyledButton variant="outlined" color="inherit" onClick={() => goToSignUp(history)}>Cadastre-se</StyledButton>
                    <StyledButton variant="outlined" color="inherit" onClick={() => goToLogin(history)}>Login</StyledButton>
                </ButtonHomeContainer>    
            )    
        } else if (title === "login" ) {
            return (
                <ButtonContainer>
                    <StyledButton variant="outlined" color="inherit" onClick={() => goToSignUp(history)}>Cadastre-se</StyledButton>
                </ButtonContainer>
            )
        } else if (title === "signup") {
            return (
                <ButtonContainer>
                    <StyledButton variant="outlined" color="inherit" onClick={() => goToLogin(history)}>Login</StyledButton>
                </ButtonContainer>
            )
        } else if (title === "feed" || title === "post") {
            return (
                <div>
                    <StyledButton color="inherit" onClick={() => onClickLogout(history)}>Logout</StyledButton>
                </div>
            )
        }
    }
    return (
    <AppBar position="static">
        <ToolbarDiv>
          <FeedTypography variant="h6" onClick={() => goToFeed(history)} >
            LabEddit
          </FeedTypography>
            {showHeader()}
        </ToolbarDiv>
      </AppBar>
    )
}