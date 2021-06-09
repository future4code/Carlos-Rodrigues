import {useLayoutEffect} from 'react'
import {useHistory} from 'react-router-dom'

const useProtectedPage = () => {
    const history = useHistory()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        token ?  history.push("/admin/trip/list") : history.push("/login")
    }, [history])
}

export default useProtectedPage