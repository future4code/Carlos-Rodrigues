import React, {useContext} from 'react';
import {CreateContainer, StyledField} from './styled'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import useForm from '../../hooks/useForm';
import { createPost } from '../../services/posts';
import GlobalStateContext from '../../global/GlobalStateContext';


export default function CreatePost() {

    const [form, onChange, clear] = useForm({title:"",  body:""})
    const {setPosts} = useContext(GlobalStateContext)
    const useStyles = makeStyles(theme => ({
        root: {
          background: theme.palette.info.main
        }
      }));
    const classes = useStyles();

    const onSubmitPost = (e) => {
        e.preventDefault()
        createPost(form, clear, setPosts)
    }

    return (
        <form onSubmit={onSubmitPost}>
            <CreateContainer>
                <StyledField
                    label="Título"
                    variant="outlined"
                    margin="dense"
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                />
                <StyledField
                    label="Texto"
                    variant="outlined"
                    margin="normal"
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                />

                <Button
                    variant="contained" 
                    type={"submit"}
                    classes={{ root: classes.root }}
                >
                    Postar !
                </Button>
            </CreateContainer>
        </form>
    )
}