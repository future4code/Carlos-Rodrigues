import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { cardColor } from '../../constants/colors';


export const PostContainer = styled.div `
    margin-top: 2vh;
    margin-bottom: 2vh;
`

export const StyledCard = styled(Card) `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 30vh;
    box-shadow: 3px 3px 3px 3px;
    background-color: ${cardColor};
    margin-bottom: 2vh;
`

export const StyledContent = styled(CardContent) `
    min-height: 22vh;
    max-width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 1px 1px 1px 1px;
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

export const CommentContainer = styled.div `
    opacity: 0.8;
    margin-top: 2vh;
    margin-bottom: 2vh;
`
export const ReactionsContainer = styled.div `
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const VotesContainer = styled.div `
    width: 23%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
