import React, { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import { Container } from './styled';

const Header = () => {
    const {setFlipCard} = useContext(GlobalStateContext)

    const onClickPlay = () => {
        setFlipCard(true)
    }
    return (
        <Container>
            <h1>Tarot</h1>
            <button onClick={() => onClickPlay()}>Jogar</button>
        </Container>
    )
}

export default Header