import React, { useEffect, useState } from 'react';
import { getCards } from '../services/cards';
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {
    const [cards, setCards] = useState([])
    const [frontUrl, setFrontUrl] = useState([])
    const [backUrl, setBackUrl] = useState([])
    const [flipCard, setFlipCard] = useState(false)
    const [chosedCard, setChosedCard] = useState([])
 
    useEffect(() => {
        getCards(setCards, setFrontUrl, setBackUrl)
    }, [])

    const data = {cards, frontUrl, backUrl, flipCard, chosedCard, setFlipCard, setChosedCard}
    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState