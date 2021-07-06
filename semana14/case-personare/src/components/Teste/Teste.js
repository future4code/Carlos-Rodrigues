import React, { useContext, useEffect, useState } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'

const Teste = () => {
    const {cards, frontUrl} = useContext(GlobalStateContext)

    const cardImages = cards.map((card) => {
        return (
            <img src={`${frontUrl}${card.image}`} />
        )
    })
    

    return (
        <div>
            {cardImages}
        </div>
    )
}

export default Teste