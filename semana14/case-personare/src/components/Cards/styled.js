import styled from 'styled-components'

export const Img = styled.img `
    width: 10vw;
`
export const BackImg = styled.img `
    width: 10vw;
    cursor: pointer;
`

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CardContainer = styled.div `
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(13, 1fr);
    grid-column-gap: 3vw;
    grid-row-gap: 2vh;
`

export const ModalContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const MainModalContainer = styled.div `
    display: flex;
    justify-content: space-around;
`

export const P = styled.p `
    padding-left: 2vw;
    padding-right: 1vw;
    margin: auto;
`