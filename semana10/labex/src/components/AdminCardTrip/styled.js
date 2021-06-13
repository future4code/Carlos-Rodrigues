import styled from 'styled-components';

export const CardContainer = styled.div `
    cursor: pointer;
    :hover {
        opacity: 0.5;
    }
    display: grid;
    grid-template-columns: 3fr 1fr;
    width: 50%;
    border-bottom: 1px solid white;
`
export const MainContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Card = styled.div `
    width: 50%;
`