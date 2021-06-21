import React from 'react'
import CardTrip from '../../components/CardTrip/CardTrip';
import ButtonHome from '../../components/ButtonHome/ButtonHome'
import { MainContainer, TopContainer } from './styled';


export default function ListTrip() {
    
    return (
    
        <MainContainer>
            <TopContainer>
                <ButtonHome/>
                <h1>Escolha seu próximo destino!</h1>
            </TopContainer>
            <hr/>
            <CardTrip/>
        </MainContainer>
    )
}