import React from 'react';
import { useHistory } from 'react-router';
import { goToAdminHome, goToListTrip, goToLogin } from '../../routes/coordinator';

export default function HomePage() {
    const history = useHistory()

    return(
        <div>
            <h1>HomePage</h1>
            <button onClick={() => goToListTrip(history)}>Viagens</button>
            <button onClick={() => goToLogin(history)}>Login</button>
            <button onClick={() => goToAdminHome(history)}>Área administrativa</button>
            <hr/>
        </div>
    )
}