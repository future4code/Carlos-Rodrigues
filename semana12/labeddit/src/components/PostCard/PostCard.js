import React, { useContext } from 'react';
import { ButtonContainer, PostContainer, VotesContainer } from './styled';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { StyledCard, StyledContent, StyledActions, UserContainer, ReactionsContainer } from './styled';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import PersonIcon from '@material-ui/icons/Person';
import { goToPost } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';
import GlobalStateContext from '../../global/GlobalStateContext';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import { changeVotePost, createVotePost, deleteVotePost } from '../../services/posts'

  export default function PostCard() {
      
    const history = useHistory()
    const {posts, setPosts} = useContext(GlobalStateContext)

    const onClickVotePost = (direction, id, setPosts, userVote) => {
        if (userVote === null) {
            createVotePost(direction, id, setPosts)
        } else if (userVote !== null && direction !== userVote) {
            changeVotePost(direction, id, setPosts)
        } else if (userVote !== null && direction === userVote) {
            deleteVotePost(id, setPosts)
        }
    }

    const postInfo = posts.map((post) => {
        return (
            <PostContainer key={post.id}>
                <StyledCard>
                    <StyledContent onClick={() => goToPost(history, post.id)}>
                        <UserContainer>
                            <PersonIcon/>
                            {post.username}
                        </UserContainer>

                        <Typography variant="h5" component="h2">
                            {post.title.toUpperCase()}
                        </Typography>


                        <Typography variant="body2" component="p">
                            {post.body}
                        </Typography>
                    </StyledContent>

                    <StyledActions>
                        <ButtonContainer>
                            <IconButton size="small" color="primary" onClick={() => onClickVotePost(1, post.id, setPosts, post.userVote)}>
                                {post.userVote !== null && post.userVote > 0 ? <ThumbUpAltIcon/> : <ThumbUpAltOutlinedIcon/>}
                            </IconButton>

                            <IconButton size="small" color="primary" onClick={() => onClickVotePost(-1, post.id, setPosts, post.userVote)}>
                                {post.userVote !== null && post.userVote < 0 ? <ThumbDownAltIcon/> : <ThumbDownOutlinedIcon/>}
                            </IconButton>
                        </ButtonContainer>
                        
                        <ReactionsContainer>
                            {post.voteSum !== null ? (post.voteSum > 0 ? <VotesContainer><InsertEmoticonIcon/> {post.voteSum}</VotesContainer> : <VotesContainer><SentimentVeryDissatisfiedIcon/> {post.voteSum}</VotesContainer>) : <VotesContainer><SentimentDissatisfiedIcon/>0</VotesContainer>}
                            {post.commentCount !== null ? ` ${post.commentCount} Comentários` : `0 Comentários`}
                        </ReactionsContainer>
                    </StyledActions>
                </StyledCard>
            </PostContainer>
        )
    })

    return (
        <div>
            {postInfo}
        </div>
    )
}
