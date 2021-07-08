import styled from 'styled-components'

export const Img = styled.img `
    width: 10vw;
    /* margin: 0.3vw; */
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