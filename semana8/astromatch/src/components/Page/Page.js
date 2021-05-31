import React, {useState} from 'react'
import FindMatch from '../FindMatch/FindMatch'
import YourMatchs from '../YourMatchs/YourMatchs'
import { Head } from './styled'

export default function Header() {

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
            return <FindMatch/>
        } else if (page === "match") {
            return <YourMatchs/>
        }
    }
    return (
        <Head>
            <p>AstroMatch</p>
            {renderButton()}
            {renderPage()}
        </Head>
    )
}