import axios from "axios";
import { useEffect, useState } from "react";

export const useRequest = (initialState, url)=>{
    const [data, setData] = useState(initialState);
 
    const GetNewsDetail = () => {

        axios
            .get(`${url}`)
            .then((response) => {
                setData(response.data);
                console.log(data)

            })
            .catch((error) => {
                console.log(error.message)
            });
    };

    useEffect(() => {
        GetNewsDetail();
    }, []);

    return [data, GetNewsDetail]
}

// export const useRequest2 = (search)=>{
//     const [data, setData] = useState(initialState);
 
//     const GetNewsDetail = () => {

//         axios
//             .get(`${url}`)
//             .then((response) => {
//                 setData(response.data);
//                 console.log(data)

//             })
//             .catch((error) => {
//                 console.log(error.message)
//             });
//     };

//     useEffect(() => {
//         GetNewsDetail();
//     }, []);

//     return [data, GetNewsDetail]
// }