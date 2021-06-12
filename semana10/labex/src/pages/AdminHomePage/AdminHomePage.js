import React from "react";
import { useHistory } from "react-router";
import useProtectedPage from "../../hooks/useProtectedPage";
import { goToCreateTrip, goToHome} from "../../routes/coordinator";
import AdminCardTrip from '../../components/AdminCardTrip/AdminCardTrip'
import ButtonHome from '../../components/ButtonHome/ButtonHome';

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
            <ButtonHome/>
            <h1>AdminHomePage</h1>
            <button onClick={() => goToCreateTrip(history)}>Nova viagem</button>
            <button onClick={onClickLogout}>Logout</button>
            <br/>
            <h3>Suas viagens</h3>
            <AdminCardTrip/>
            <hr/>
        </div>
    )
}