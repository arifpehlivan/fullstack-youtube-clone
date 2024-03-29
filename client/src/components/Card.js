import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import VideoPhoto from "../img/1.jpg"
import ChannelPhoto from "../img/2.jpg"
import { Link } from "react-router-dom"
import {format} from "timeago.js"
import axios from "axios"

const Container = styled.div`
    width: ${(props)=>props.type !== "sm" && "260px"};
    margin-bottom: ${(props)=>props.type === "sm" ? "10px" : "45px"};
    cursor: pointer;
    box-sizing: border-box;
    display: ${(props)=>props.type === "sm" && "flex"};
    gap: 10px;
`
const Image = styled.img`
    width: 100%;
    height: ${(props)=>props.type === "sm" ? "120px" : "202px"};
    background: #999;
    flex: 1;
`
const Details = styled.div`
    display: flex;
    margin-top: ${(props)=>props.type !== "sm" ? "10px" : "-10px"};
    gap: 12px;
    flex: 1;
`
const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #999;
    display: ${(props)=>props.type === "sm" && "none"};
`
const Texts = styled.div`
    
`
const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({theme}) => theme.text};
`
const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
    margin: 9px 0px;
`
const Info = styled.div`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
`

const Card = ({type, video}) => {
    // console.log(video);
    const [channel, setChannel] = useState({})
    useEffect(() => {
        const fetchChannel = async () => {
            const res = await axios.get(`/users/find/${video.userId}`)
            // console.log(res)
            setChannel(res.data)
            // console.log(res.data);
        }
        fetchChannel()
    },[video.userId])
    // console.log("11111",video)
    return (
        <Link to={`/video/${video._id}`} style={{textDecoration:"none"}}>
        <Container type={type}>
            <Image type={type} src={VideoPhoto}/>
            <Details type={type}>
                <ChannelImage type={type} src={ChannelPhoto}/>
                <Texts>
                    <Title>{video.title}</Title>
                    <ChannelName>{channel.name}</ChannelName>
                    <Info>{video.views} views • {format(video.createdAt)}</Info>
                </Texts>
            </Details>
        </Container>
        </Link>
    )
}

export default Card