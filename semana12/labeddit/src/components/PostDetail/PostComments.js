import React from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import { CommentContainer, ButtonContainer } from './styled'
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { StyledCard, StyledContent, StyledActions, UserContainer, VotesContainer } from './styled';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SendIcon from '@material-ui/icons/Send';
import useForm from '../../hooks/useForm'
import { changeVoteComment, createComment, createVoteComment, deleteVoteComment } from '../../services/posts'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';

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

    const onClickVoteComment = (direction, id, getData, userVote) => {
        if (userVote === null) {
            createVoteComment(direction, id, getData)
        } else if (userVote !== null && direction !== userVote) {
            changeVoteComment(direction, id, getData)
        } else if (userVote !== null && direction === userVote) {
            deleteVoteComment(id, getData)
        }
    }

    const comments = postComments.data.map((comment) => {
        return (
            <CommentContainer key={comment.id}>
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
                            <IconButton size="small" color="primary" onClick={() => onClickVoteComment(1, comment.id, postComments.getData, comment.userVote)}>
                                {comment.userVote !== null && comment.userVote > 0 ? <ThumbUpAltIcon/> : <ThumbUpAltOutlinedIcon/>}
                            </IconButton>

                            <IconButton size="small" color="primary" onClick={() => onClickVoteComment(-1, comment.id, postComments.getData, comment.userVote)}>
                                {comment.userVote !== null && comment.userVote < 0 ? <ThumbDownAltIcon/> : <ThumbDownOutlinedIcon/>}
                            </IconButton>

                        </ButtonContainer>
                        <div>
                                {comment.voteSum !== null ? (comment.voteSum > 0 ? <VotesContainer><InsertEmoticonIcon/> {comment.voteSum}</VotesContainer> : <VotesContainer><SentimentVeryDissatisfiedIcon/> {comment.voteSum}</VotesContainer>) : <VotesContainer><SentimentDissatisfiedIcon/>0</VotesContainer> }
                        </div>
                    </StyledActions>
                </StyledCard>
            </CommentContainer>
          )
    })
    return (
        <div>
            <Paper component="form" className={classes.root} onSubmit={onSubmitComment}>
                <InputBase fullWidth
                    className={classes.input}
                    placeholder="Comentário"
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    
                />
                <IconButton type="submit" className={classes.iconButton}>
                    <SendIcon/>
                </IconButton>
                </Paper>
            {comments}
        </div>
    )
}