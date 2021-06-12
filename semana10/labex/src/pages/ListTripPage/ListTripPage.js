import React from 'react'
import { useHistory } from 'react-router';
import CardTrip from '../../components/CardTrip/CardTrip';
import ButtonHome from '../../components/ButtonHome/ButtonHome'


export default function ListTrip() {

    const history = useHistory()
    
    return (
    
        <div>
            <ButtonHome/>
            <h1>ListTrip</h1>
            <h3>CardTrip</h3>
            <hr/>
            <CardTrip/>
        </div>
    )
}