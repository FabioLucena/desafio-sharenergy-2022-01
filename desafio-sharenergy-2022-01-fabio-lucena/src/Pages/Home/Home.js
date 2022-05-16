import React, { useContext, useEffect } from "react";
import { Container, ContainerCards } from "./Styled";
import Header from "../../Components/Header/Header";
import GlobalStateContext from "../../Components/Global/GlobalStateContext";
import Card from "../../Components/Card/Card";
import ActionAreaCard from "../../Components/Card/Card";
import BasicSelect from "../../Components/Select/BasicSelect";
import PaginationOutlined from "../../Components/Pagination/PaginationOutlined";

export default function Home() {
    const { states, setters, requests } = useContext(GlobalStateContext);

    const news = states.data

    useEffect(() => {
        requests.getData()
    }, [])

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
            <BasicSelect/>
            <ContainerCards>
                {getNews}
            </ContainerCards>
            <PaginationOutlined/>
        </Container>
    )
}

