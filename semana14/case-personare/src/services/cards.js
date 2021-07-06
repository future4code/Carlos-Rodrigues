import axios from "axios"

export const getCards = (setCards, setFrontUrl, setBackUrl) => {
    axios.get('tarot.json')
    .then((res) => {
        setCards(res.data.cards)
        setFrontUrl(res.data.imagesUrl)
        setBackUrl(res.data.imageBackCard)
    })
    .catch((err) => {
        console.log(err)
    })

}