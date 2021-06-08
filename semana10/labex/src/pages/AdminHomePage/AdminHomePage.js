import React from "react";
import { useHistory } from "react-router";
import { goToCreateTrip, goToHome, goToLogin, goToTripDetails } from "../../routes/coordinator";

export default function AdminHomePage() {
    const history = useHistory();
    return (
        <div>
            <h1>AdminHomePage</h1>
            <button onClick={() => goToHome(history)}>Início</button>
            <button onClick={() => goToCreateTrip(history)}>Nova viagem</button>
            <button onClick={() => goToLogin(history)}>Logout</button>
            <br/>
            <h3>Suas viagens</h3>
            <button onClick={() => goToTripDetails(history)}>CardViagem clicável</button>
            <button>Excluir viagem</button>
            <hr/>
        </div>
    )
}