import React from 'react'
import { ErrorContainer, StyledButton } from './styled'
import { goToLogin } from '../../routes/coordinator'
import { useHistory } from 'react-router'

export default function ErrorPage() {
    const history = useHistory()
    return (
        <ErrorContainer>
            <img 
                src="https://media4.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy.gif"
                width="480"
                height="480" 
                frameBorder="0"
                alt="Error"
            />
            <div>
                <StyledButton variant="outlined" color="inherit" onClick={() => goToLogin(history)}>Fazer Login</StyledButton>
            </div>
        </ErrorContainer>
    )
}