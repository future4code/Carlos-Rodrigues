import { useEffect, useState } from "react";
import axios from 'axios';

const useRequestData = (url, initialState) => {

    const [data, setData] = useState(initialState)
    const getData = () => {
        const token = localStorage.getItem("token")
        
        axios.get(url, {headers: {Authorization: token}})
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            alert(err.response.message)
        })   
    }

    useEffect(() => {
        getData();
      }, [url]);
    
      return { data, getData };
    
}

export default useRequestData