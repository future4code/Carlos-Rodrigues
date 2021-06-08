import axios from 'axios';
import {useEffect, useState} from 'react'

const useRequestData = (initialState, url) => {

    const [data, setData] = useState(initialState)

    const getData = () => {
        axios.get(url)
        .then((res) => {
            // console.log(res.data)
            setData(res.data)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return data;
}
export default useRequestData;
