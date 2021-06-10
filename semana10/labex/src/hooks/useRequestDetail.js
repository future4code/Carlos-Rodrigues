// import axios from 'axios';
// import {useEffect, useState} from 'react'

// const useRequestDetail = (url, header, initialState) => {

//     const [data, setData] = useState(initialState)

//     const getData = () => {
//         axios.get(url, header)
//         .then((res) => {
//             setData(res.data)
//         })
//         .catch((err) => {
//             alert(err.response.data.message)
//         })
//     }

//     useEffect(() => {
//         getData()
//     }, [])

//     return data;
// }


// export default useRequestDetail;