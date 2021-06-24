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
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import useForm from '../../hooks/useForm'
import { createComment } from '../../services/posts'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function PostDetail() {

    const classes = useStyles();
    const params = useParams()
    const postComments = useRequestData(`${BASE_URL}/posts/${params.id}/comments`, [])
    const [form, onChange, clear] = useForm({body: ""})

    const onSubmitComment = (e) => {
        e.preventDefault()
        createComment(form, params.id, clear, postComments.getData)
    }
    console.log(postComments)

    const comments = postComments.data.map((comment) => {
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
            {/* <TextField
                fullWidth
                label="Comentário"
                variant="outlined"
                margin="normal"
            /> */}
            <Paper component="form" className={classes.root} onSubmit={onSubmitComment}>
                <InputBase fullWidth
                    className={classes.input}
                    placeholder="Comentário"
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    
                />
                <IconButton type="submit" className={classes.iconButton}>
                    <MessageOutlinedIcon />
                </IconButton>
                </Paper>
            {comments}
        </div>
    )
}