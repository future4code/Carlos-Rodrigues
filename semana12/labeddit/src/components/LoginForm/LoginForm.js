import React from 'react';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
import useForm from '../../hooks/useForm';
import { makeStyles } from '@material-ui/core';
import { Button, TextField } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import { LoginContainer } from './styled';
import {login} from '../../services/users'
import { useHistory } from 'react-router-dom';

export default function LoginForm() {
    const history = useHistory()
    const [form, onChange, clear] = useForm({email:"",  password:""})
    
    const useStyles = makeStyles(theme => ({
        root: {
          background: theme.palette.info.main
        }
      }));

    const classes = useStyles();

    const onSubmitLogin = (e) => {
        e.preventDefault()
        login(form, clear, history)
    }
    return (
    <form onSubmit={onSubmitLogin}>
        <LoginContainer>
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
                Entrar
            </Button>
        </LoginContainer>
    </form>
    )
}


