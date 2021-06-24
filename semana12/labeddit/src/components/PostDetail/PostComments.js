import React from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import { TextField } from '@material-ui/core'
import { CommentContainer, ButtonContainer } from './styled'
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { StyledCard, StyledContent, StyledActions, UserContainer } from './styled';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import PersonIcon from '@material-ui/icons/Person';

export default function PostDetail() {
    const params = useParams()

    const postComments = useRequestData(`${BASE_URL}/posts/${params.id}/comments`, [])
    console.log("detail", postComments)
    const comments = postComments[0].map((comment) => {
        return (
            <CommentContainer>
                <StyledCard>
                    <StyledContent>
                        <UserContainer>
                            <PersonIcon/>
                            {comment.username}
                        </UserContainer>

                        <Typography variant="body2" component="p">
                            {comment.body}
                        </Typography>
                    </StyledContent>

                    <StyledActions>
                        <ButtonContainer>
                            <IconButton size="small" color="primary">
                                <ThumbUpAltOutlinedIcon/>
                            </IconButton>

                            <IconButton size="small" color="primary">
                                <ThumbDownOutlinedIcon/>
                            </IconButton>
                        </ButtonContainer>

                        <div>
                            
                        </div>
                    </StyledActions>
                </StyledCard>
            </CommentContainer>
          )
    })
    return (
        <div>
            <TextField
                fullWidth
                label="Comentário"
                variant="outlined"
                margin="normal"
            />
            {comments}
        </div>
    )
}