import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useRequest } from "../../Components/CustomHooks/UseRequest"
import Header from "../../Components/Header/Header"
import { Container, Img, NewsContainer, NewsP } from "./Styled"

function DetailsPage() {
    const navigate = useNavigate()
    const { id } = useParams()
    console.log("id", id)
    const [details, GetNewsDetail] = useRequest([], `https://api.spaceflightnewsapi.net/v3/articles/${id}`)

    console.log(details)
    return (

        <Container>
            <Header cont={0}/>
            <NewsContainer>
            <Card sx={{ maxWidth: 1045, height: 845 }} >
                <CardActionArea >
                    <CardMedia
                        component="img"
                        height="540"
                        image={details.imageUrl}
                        alt="News Image"
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h4" component="div">
                            {details.title}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            {details.summary}
                        </Typography>
                        <Typography variant="h7" component="p">
                            <NewsP>Font: {details.newsSite}</NewsP>
                        </Typography>
                        <Typography variant="h7">
                            Published: {details.updatedAt}
                        </Typography>
                        <Typography variant="h7" component="div">
                            <a href={details.url}>Link</a>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </NewsContainer>
        </Container>

    )
}

export default DetailsPage;