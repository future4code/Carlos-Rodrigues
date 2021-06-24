import React, {useEffect} from 'react';
import { TextField } from '@material-ui/core';
import {CreateContainer, StyledField} from './styled'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import useForm from '../../hooks/useForm';
import { createPost } from '../../services/posts';


export default function CreatePost() {

    const [form, onChange, clear] = useForm({title:"",  body:""})


    const useStyles = makeStyles(theme => ({
        root: {
          background: theme.palette.info.main
        }
      }));

    const classes = useStyles();

    const onSubmitPost = (e) => {
        e.preventDefault()
        createPost(form, clear)
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