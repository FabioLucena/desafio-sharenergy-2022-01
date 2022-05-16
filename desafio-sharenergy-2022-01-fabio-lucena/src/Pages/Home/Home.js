import React, { useContext, useEffect, useState } from "react";
import { Container, ContainerCards } from "./Styled";
import Header from "../../Components/Header/Header";
import GlobalStateContext from "../../Components/Global/GlobalStateContext";
import Card from "../../Components/Card/Card";
import ActionAreaCard from "../../Components/Card/Card";
import BasicSelect from "../../Components/Select/BasicSelect";
import PaginationOutlined from "../../Components/Pagination/PaginationOutlined";
import { Box, Button } from "@mui/material";
import useForm from "../../Components/CustomHooks/UseForm";

export default function Home() {
    const { states, setters, requests } = useContext(GlobalStateContext);
    // const { form, changeValues, clear } = useForm({ date1: "", date2: "" })
    const [values, setValues] = useState({
        date: "",
        date2: ""
    })
    const [cont, setCont] = useState(false)

    const news = states.data

    useEffect(() => {
        requests.getData()
    }, [])

    const handleInputChange = (event) => {
        setValues({ ...values, date: event.target.value })
    }

    const handleInputChange2 = (event) => {
        setValues({ ...values, date2: event.target.value })
    }

    const dateFilter = (event) => {
        event.preventDefault()
        setters.setDateLimits(true)
        setters.setMinDate(values.date)
        setters.setMaxDate(values.date2)
    }

    const getNews = news.map((a) => {
        return (
            <ActionAreaCard
                id={a.id}
                image={a.imageUrl}
                title={a.title}
                publishedAt={a.publishedAt}
            />
        )
    })
    return (
        <Container>
            <Header
                cont={1}
            />
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <BasicSelect />
                <Button onClick={() => setCont(!cont)}>Filter by Date</Button>
            </Box>
            {cont === false ? "" :
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <form onSubmit={dateFilter}>
                        start date: <input type="date"
                            name={"date1"}
                            id={"date1"}
                            onChange={handleInputChange}
                        />
                        final date: <input type="date"
                            name={"date2"}
                            onChange={handleInputChange2}
                        />
                        <Button type={"submit"}>filter</Button>
                    </form>
                </Box>
            }
            <ContainerCards>
                {getNews}
            </ContainerCards>
            <PaginationOutlined />
        </Container>
    )
}

