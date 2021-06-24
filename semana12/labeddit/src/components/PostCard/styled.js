import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';


export const PostContainer = styled.div `
    margin-top: 2vh;
    margin-bottom: 2vh;
`

export const StyledCard = styled(Card) `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 30vh;
`

export const StyledContent = styled(CardContent) `
    min-height: 22vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const StyledActions = styled(CardActions) `
    display: flex;
    justify-content: space-between;
    margin-right: 2vw;
    margin-left: 2vw;
`

export const ButtonContainer = styled.div `
    width: 15%;
    display: flex;
    justify-content: space-between;
`

export const UserContainer = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
`