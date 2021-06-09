import React from "react";
import { useHistory } from "react-router";
import useProtectedPage from "../../hooks/useProtectedPage";
import { goToCreateTrip, goToHome, goToLogin, goToTripDetails } from "../../routes/coordinator";
import AdminCardTrip from '../../components/AdminCardTrip/AdminCardTrip'

export default function AdminHomePage() {
    const history = useHistory();

    useProtectedPage()

    const onClickLogout = () => {
        localStorage.removeItem("token")
        history.push("/login")
    }
    console.log()
    return (
        <div>
            <h1>AdminHomePage</h1>
            <button onClick={() => goToHome(history)}>Início</button>
            <button onClick={() => goToCreateTrip(history)}>Nova viagem</button>
            <button onClick={onClickLogout}>Logout</button>
            <br/>
            <h3>Suas viagens</h3>
            <AdminCardTrip/>
            {/* <button onClick={() => goToTripDetails(history)}>CardViagem clicável</button> */}
            {/* <button>Excluir viagem</button> */}
            <hr/>
        </div>
    )
}