import React from 'react';
import { useHistory } from 'react-router';
import { goToListTrip, goToLogin } from '../../routes/coordinator';
import Button from '@material-ui/core/Button'
import { HomeButtonContainer, HomeContainer } from './styled';


export default function HomePage() {
    const history = useHistory()

    return(        
        <HomeContainer>
            <h1>Seja bem vindo ao LabeX</h1>
            <HomeButtonContainer>
                <Button variant="contained" color="primary" onClick={() => goToListTrip(history)}>
                    Viagens
                </Button>
                <Button variant="contained" color="primary" onClick={() => goToLogin(history)}>
                    Entrar
                </Button>
            </HomeButtonContainer>
        </HomeContainer>
    )
}