import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import GlobalStateContext from "../../Components/Global/GlobalStateContext"
import Header from "../../Components/Header/Header"
import { GoToDetailsPage } from "../../Routes/RouteFunctions"
import { ButtonContainer, Container, Img, NewsContainer, NewsP } from "./Styled"

function DetailsPage() {
    const navigate = useNavigate()
    const { states, setters, requests } = useContext(GlobalStateContext);
    const { id } = useParams()
    console.log("id", id)
    const [data5, setData5] = useState([])
    const [cont, setCont] = useState(true)

    const page = () => {

        axios
            .get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
            .then((response) => {
                setData5(response.data)
            })
            .catch((error) => {
                console.log(error);
                cont === true ? GoToDetailsPage(navigate, Number(id) + 1) : GoToDetailsPage(navigate, Number(id) - 1)
            });


    }

    useEffect(() => {
        page()
    }, [id])

    let detail = data5 ? data5 : GoToDetailsPage(navigate, Number(id) + 1)
    // console.log(detail[0].publishedAt)
    const previousPage = () => {
        setCont(false)
        GoToDetailsPage(navigate, Number(id) - 1)
    }

    const nextPage = () => {
        setCont(true)
        if (states.limit.toString() === id) {
            console.log("ultima noticia")
        } else {
            GoToDetailsPage(navigate, Number(id) + 1)
        }

    }

    return (

        <Container>
            <Header cont={0} />

            <NewsContainer>
                <Card sx={{ maxWidth: 1045, height: 845 }} >
                    <CardActionArea >
                        <CardMedia
                            component="img"
                            height="540"
                            image={!!detail.imageUrl ? detail.imageUrl : "carregando"}
                            alt="News Image"
                        />
                        <CardContent >
                            <Typography gutterBottom variant="h4" component="div">
                                {detail.title}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                {detail.summary}
                            </Typography>
                            <Typography variant="h7" component="p">
                                <NewsP>Font: {detail.newsSite}</NewsP>
                            </Typography>
                            <Typography variant="h7">
                                Published: {detail.updatedAt}
                            </Typography>
                            <Typography variant="h7" component="div">
                                <a href={detail.url}>Link</a>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Box sx={{ '& button': { m: 1 } }}>
                    <Button size="medium" variant="contained" onClick={() => previousPage()}>PREVIOUS</Button>
                    <Button sx={{paddingLeft: 2}} size="medium" variant="contained" onClick={() => nextPage()}>NEXT</Button>
                </Box>
            </NewsContainer>



        </Container>

    )
}

export default DetailsPage;