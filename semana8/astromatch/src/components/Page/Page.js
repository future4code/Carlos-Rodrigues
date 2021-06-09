import React, {useState} from 'react'
import ProfilePage from '../ProfilePage/ProfilePage'
import YourMatchs from '../YourMatchs/YourMatchs'
import {Bar, Container, Content} from './styled'

export default function Page() {

    const [option, setOption] = useState(true)
    const [page, setPage] = useState("home")

    const onClickButtonHeader = () => {
        setOption(!option)
        if (page === "home") {
            setPage("match")
        } else if (page === "match") {
            setPage("home")
        }
    }
    
    const renderButton = () => {
        if (option) {
            return <button onClick={onClickButtonHeader}>Matchs</button>
        } else {
            return <button onClick={onClickButtonHeader}>Início</button>
        }   
    }
    const renderPage = () => {
        if (page === "home") {
            return <ProfilePage/>
        } else if (page === "match") {
            return <YourMatchs/>
        }
    }
    return (
        <Container>
            <Bar>
                <p>AstroMatch</p>
                {renderButton()}
            </Bar>
            <Content>
                {renderPage()}
            </Content>
        </Container>
    )
}