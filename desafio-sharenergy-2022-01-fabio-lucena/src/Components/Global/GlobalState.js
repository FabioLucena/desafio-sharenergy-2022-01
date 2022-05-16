import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext";

export default function GlobalState(props) {
    const [data, setData] = useState([])
    const [data2, setData2] = useState(10)
    const [data3, setData3] = useState(0)
    const [data4, setData4] = useState(0)
    const [url, setUrl] = useState(`https://api.spaceflightnewsapi.net/v3/articles`)
    const [limit, setLimit] = useState()
    const [postUrl2, setPostUrl2] = useState("")
    const [dateLimits, setDateLimits] = useState(false)
    const [minDate, setMinDate] = useState("")
    const [maxDate, setMaxDate] = useState("")

    const getData = () => {

        axios
            .get(`${url}${data4 === 0? `?_limit=${data2}&_start=${(data2*(data3-1)) < 0? 0 : (data2*(data3-1))}${dateLimits === false? "" : "&publishedAt_lt="+maxDate+"&publishedAt_gt="+minDate}` : `?title_contains=${postUrl2}` } `)
            .then((response)=>{
                setData(response.data)
                setLimit(response.data[0].id)
                console.log("ultimo id", response.data[0].id)
            })
            .catch((error) => {
                console.log(error);
                console.log(`${url}${data4 === 0? `?_limit=${data2}&_start=${(data2*(data3-1)) < 0? 0 : (data2*(data3-1))}${dateLimits === false? "" : "publishedAt_lt="+maxDate+"&publishedAt_gt="+minDate}` : `?title_contains=${postUrl2}` } `)
            });


            
    }

    useEffect(()=>{
        requests.getData()
    }, [data2, data3, postUrl2, data4, dateLimits]) 


    const states = { data, data2, data3, data4, limit, postUrl2, dateLimits, minDate, maxDate }
    const setters = { setData, setData2, setData3, setData4, setPostUrl2, setDateLimits, setMinDate, setMaxDate }
    const requests = { getData }

    return (
        <GlobalStateContext.Provider value={{states, setters, requests}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}