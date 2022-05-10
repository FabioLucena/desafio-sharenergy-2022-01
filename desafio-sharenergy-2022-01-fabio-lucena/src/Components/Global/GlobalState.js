import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext";

export default function GlobalState(props) {
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])

    const getData = () => {

        axios
            .get("https://api.spaceflightnewsapi.net/v3/articles")
            .then((response)=>{
                setData(response.data)
                console.log(data)
            })
            .catch((error) => {
                console.log(error);
            });


            
    }

    useEffect(()=>{
        requests.getData()
    }, []) 


    const states = { data, data2 }
    const setters = { setData, setData2 }
    const requests = { getData }

    return (
        <GlobalStateContext.Provider value={{states, setters, requests}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}