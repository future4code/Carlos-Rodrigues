import React, { useContext } from 'react';
import { ButtonContainer, PostContainer } from './styled';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { StyledCard, StyledContent, StyledActions, UserContainer } from './styled';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import PersonIcon from '@material-ui/icons/Person';
import { goToPost } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';
import GlobalStateContext from '../../global/GlobalStateContext';



  export default function PostCard() {
      
    const history = useHistory()
    const {posts} = useContext(GlobalStateContext)

    const postInfo = posts.map((post) => {
        return (
            <PostContainer>
                <StyledCard 
                    key={post.id}
                    onClick={() => goToPost(history, post.id)}
                >
                    <StyledContent>
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
                            <IconButton size="small" color="primary">
                                <ThumbUpAltOutlinedIcon/>
                            </IconButton>

                            <IconButton size="small" color="primary">
                                <ThumbDownOutlinedIcon/>
                            </IconButton>
                        </ButtonContainer>

                        <div>
                            {post.commentCount !== null ? `${post.commentCount} Comentários` : `0 Comentários`}
                        </div>
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

