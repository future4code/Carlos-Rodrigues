import React from 'react'
import { useHistory } from 'react-router';
import CardTrip from '../../components/CardTrip/CardTrip';
import { goToApplicationForm, goToHome } from '../../routes/coordinator';


export default function ListTrip() {

    const history = useHistory()
    
    return (
    
        <div>
            <button onClick={() =>goToHome(history)}>Home</button>
            <h1>ListTrip</h1>
            <h3>CardTrip</h3>
            <button onClick={() => goToApplicationForm(history)}>Inscreva-se</button>
            <hr/>
            <CardTrip/>
        </div>
    )
}