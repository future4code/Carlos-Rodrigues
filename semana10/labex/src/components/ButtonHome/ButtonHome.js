import React from 'react';
import { useHistory } from 'react-router';
import { goToHome } from '../../routes/coordinator';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';


export default function ButtonHome() {
    const history = useHistory()
    
    return (
        <IconButton  onClick={() => goToHome(history)}>
            <HomeIcon fontSize="large"/>
        </IconButton>
    )
}