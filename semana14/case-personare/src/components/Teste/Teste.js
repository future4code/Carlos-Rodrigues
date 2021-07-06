import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Teste = () => {

    const [cards, setCards] = useState([])
    const [url, setUrl] = useState([])

    const getCartas = () => {
        axios.get('tarot.json')
        .then((res) => {
            setCards(res.data.cards)
            setUrl(res.data.imagesUrl)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    const cardImages = cards.map((card) => {
        console.log(`${url}${card.image}`)
        return (
            <img src={`${url}${card.image}`} />
        )
    })
    
    useEffect(() => {
        getCartas()
    }, [])
    return (
        <div>
            {cardImages}
        </div>
    )
}

export default Teste