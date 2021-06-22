import React from 'react'
import Header from '../../components/Header/Header'
import { Container, Box } from '@material-ui/core'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

export default function HomePage() {

    useUnprotectedPage()

    return (
        <div>
            <Header 
                title={"home"}
            />
            <Container>
                <Box my={2}>
                    {[...new Array(12)].map(() => 
                        `Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                    ).join('\n')}

                    {[...new Array(12)].map(() => 
                        `Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                    ).join('\n')}
            
                </Box>
            </Container>
        </div>
    )
}