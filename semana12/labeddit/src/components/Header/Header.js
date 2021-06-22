import React from 'react';
import { useHistory } from 'react-router';
import { goToSignUp, goToLogin, goBack, goToHome} from '../../routes/coordinator';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { ButtonHomeContainer, ToolbarDiv, StyledButton, ButtonContainer } from './styled';

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
                    Nome do usuário
                    <StyledButton color="inherit" onClick={() => onClickLogout(history)}>Logout</StyledButton>
                </div>
            )
        }
    }
    return (
    <AppBar position="static">
        <ToolbarDiv>
          <Typography variant="h6" >
            LabEddit
          </Typography>
            {showHeader()}
        </ToolbarDiv>
      </AppBar>
    )
}