import React, { useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'
import Carousel from 'react-elastic-carousel'

const Cards = () => {
    const {cards, frontUrl} = useContext(GlobalStateContext)

    const cardImages = cards.map((card) => {
        return (
            <img key={card.name} src={`${frontUrl}${card.image}`} alt={card.name}/>
        )
    })
    

    return (
        <div>
            <Carousel itemsToShow={10} itemsToScroll={5} itemPadding={[10, 100]} >
                {cardImages}
            </Carousel>
            <button>Jogar</button>
        </div>
    )
}

export default Cards