import axios from 'axios';
import {useEffect, useState} from 'react'

const useRequestData = (url, initialState) => {

    const [data, setData] = useState(initialState)

    const getData = () => {
        axios.get(url)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    useEffect(() => {
        getData()
    }, [url])

    return [data, getData];
}


export default useRequestData;
