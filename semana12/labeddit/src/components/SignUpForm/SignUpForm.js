import React from 'react';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import useForm from '../../hooks/useForm'
import { makeStyles } from '@material-ui/core';
import { Button, TextField } from '@material-ui/core';
import { SignUpContainer } from './styled';

export default function SignUpForm() {


    const [form, onChange] = useForm({username: "", email:"",  password:""})

    const onSubmitSignUp = (e) => {
        e.preventDefault()
        console.log(form)
    }

    const useStyles = makeStyles(theme => ({
        root: {
          background: theme.palette.info.main
        }
      }));

    const classes = useStyles();


    return (
        <form onSubmit={onSubmitSignUp}>
            <SignUpContainer>
                <TextField 
                    label="Nome de usuário"
                    name={"username"}
                    value={form.username}
                    onChange={onChange}
                    required
                    margin={"normal"}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <PersonIcon/>
                        </InputAdornment>
                        ),
                    }}
                />
                <TextField 
                    label="E-mail"
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    type={"email"}
                    required
                    margin={"normal"}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <EmailIcon/>
                        </InputAdornment>
                        ),
                    }}
                />

                <TextField 
                    label="Senha"
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    type={"password"}
                    required
                    margin={"normal"}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <LockIcon/>
                        </InputAdornment>
                        ),
                    }}
                />

                <Button 
                    variant="contained" 
                    type={"submit"}
                    classes={{ root: classes.root }}
                >
                    Cadastrar
                </Button>
            </SignUpContainer>
        </form>

    )
}


