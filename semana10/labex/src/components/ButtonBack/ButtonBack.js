import React from 'react';
import { useHistory } from 'react-router';
import { goBack } from '../../routes/coordinator';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';


export default function ButtonBack() {

    const history = useHistory()
    
    return (
            <IconButton onClick={() => goBack(history)}>
                <ArrowBackIcon fontSize="large"/>
            </IconButton>
    )
}