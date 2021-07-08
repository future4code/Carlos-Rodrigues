import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import { Container } from './styled';

const Header = () => {
    const {flipCard, setFlipCard} = useContext(GlobalStateContext)

    const onClickPlay = () => {
        setFlipCard(!flipCard)
    }
    return (
        <Container>
            <h1>Tarot</h1>
            <Button onClick={() => onClickPlay()} color="inherit" variant="outlined">Jogar</Button>
        </Container>
    )
}

export default Header