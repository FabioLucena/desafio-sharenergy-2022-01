import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    /* background-color: #808080; */
`

export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    grid-gap: 10px;
    @media (min-device-width: 701px) and (max-device-width: 1100px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-device-width: 501px) and (max-device-width: 700px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media (min-device-width: 300px) and (max-device-width: 500px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`