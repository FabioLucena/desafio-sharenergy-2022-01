import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext";

export default function GlobalState(props) {
    const [data, setData] = useState([])
    const [data2, setData2] = useState(10)
    const [data3, setData3] = useState(0)
    const [data4, setData4] = useState(0)
    const [url, setUrl] = useState(`https://api.spaceflightnewsapi.net/v3/articles`)
    const [postUrl, setPostUrl] = useState(`?_limit=${data2}&_start=${(data2*(data3-1)) < 0? 0 : (data2*(data3-1))}`)
    const [postUrl2, setPostUrl2] = useState("")

    const getData = () => {

        axios
            .get(`${url}${data4 === 0? `?_limit=${data2}&_start=${(data2*(data3-1)) < 0? 0 : (data2*(data3-1))}`: `?title_contains=${postUrl2}` } `)
            .then((response)=>{
                setData(response.data)
            })
            .catch((error) => {
                console.log(error);
            });


            
    }

    useEffect(()=>{
        requests.getData()
    }, [data2, data3, postUrl2, data4]) 


    const states = { data, data2, data3, data4, postUrl2 }
    const setters = { setData, setData2, setData3, setData4, setPostUrl2 }
    const requests = { getData }

    return (
        <GlobalStateContext.Provider value={{states, setters, requests}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}