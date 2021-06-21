import React from "react";
import { useHistory } from "react-router";
import useProtectedPage from "../../hooks/useProtectedPage";
import { goToCreateTrip} from "../../routes/coordinator";
import AdminCardTrip from '../../components/AdminCardTrip/AdminCardTrip'
import ButtonHome from '../../components/ButtonHome/ButtonHome';
import { Button, Container } from "@material-ui/core";
import {ButtonContainer, MainContainer, TopContainer, White} from './stlyled'

export default function AdminHomePage() {
    const history = useHistory();

    useProtectedPage()

    const onClickLogout = () => {
        localStorage.removeItem("token")
        history.push("/login")
    }
    return (
        
            <MainContainer>
                <White>
                        <TopContainer>
                            <ButtonHome/>
                            <h1>Página do administrador</h1>
                        </TopContainer>
                        <ButtonContainer>
                            <Button size="small" variant="contained" color="primary" onClick={() => goToCreateTrip(history)}>Nova viagem</Button>
                            <Button size="small" variant="contained" color="primary" onClick={onClickLogout}>Logout</Button>
                        </ButtonContainer>
                    <Container>
                        <h3>Suas viagens</h3>
                    </Container>
                    <AdminCardTrip/>
                </White>
            </MainContainer>        
    )
}