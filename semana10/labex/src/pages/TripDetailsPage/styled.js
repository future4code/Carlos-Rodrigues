import styled from 'styled-components';
import ceu from '../../img/ceu.jpg';

export const MainContainer = styled.div `
    background-image: url(${ceu});
    background-size: cover;
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`
export const White = styled.div `
    background-color: rgb(255, 255, 255, 0.1);
    height: 100vh;
`
export const TopContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 53%;
    margin-left: 5vw;
`

export const DetailsContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 5vh;
`

export const TripContainer = styled.div `
    width: 60%;
`

export const Candidates = styled.div `
    width: 40%;
    text-align: center;
    margin-top: 5vh;
`
export const ButtonsContainer = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
`
export const Approved = styled.div `
    width: 40%;
    text-align: center;
    margin-top: 5vh;
`
export const CandidatesContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
`