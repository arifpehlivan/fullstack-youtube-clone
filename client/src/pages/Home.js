import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import axios from "axios"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Home = ({type}) => {
    const [videos, setVideos] = useState([])
    // console.log("videos",videos);
    useEffect(() => {
        const fetchVideos = async () => {
            const res = await axios.get(`/videos/${type}`)
            setVideos(res.data)
            // console.log(res.data);
        }
        fetchVideos()
    },[type])
    // console.log("videos1",videos);
    return (
        <Container>
            {videos.map((video) => (
                <Card key={video._id} video={video}/>
            ))} 
        </Container>
    )
}

export default Home