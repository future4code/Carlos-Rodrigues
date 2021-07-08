import React, { useContext } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'
import { CardContainer, Container, Img } from './styled'

const Cards = () => {
    const {cards, frontUrl, backUrl ,flipCard} = useContext(GlobalStateContext)

    const cardImages = cards.map((card) => {
        if (flipCard === false) {
            return (
                    <Img key={card.name} src={`${frontUrl}${card.image}`} alt={card.name}/>
            )
        } else if (flipCard === true) {
            return (
                <Img src={backUrl}/>
            )
        }
    })
    

    return (
        <Container>
            <CardContainer>
                {cardImages}
            </CardContainer>
        </Container>
    )
}

export default Cards