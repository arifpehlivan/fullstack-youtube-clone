import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ChannelPhoto from "../img/2.jpg"
import Comments from '../components/Comments';
import Card from '../components/Card';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { fetchSuccess } from '../redux/videoSlice';
import { format } from 'timeago.js';

const Container = styled.div`
    display: flex;
    gap: 24px;
`
const Content = styled.div`
    flex: 5;
`
const VideoWrapper = styled.div``
const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text};
`
const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Info = styled.span`
    color: ${({ theme }) => theme.textSoft};
`
const Buttons = styled.div`
    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme.text};
`
const Button = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`
const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft};
`
const Recommendation = styled.div`
    flex: 2;
`
const Channel = styled.div`
    display: flex;
    justify-content: space-between;
`
const ChannelInfo = styled.div`
    display: flex;
    gap: 20px;
`
const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #999;
`
const ChannelDetail = styled.div`
    display: flex;
    flex-direction: column;
`
const ChannelName = styled.span`
    font-weight: 500;
    color: ${({ theme }) => theme.text};
`
const ChannelCounter = styled.span`
    margin-top: 5px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.textSoft};
    font-style: 12px;
`
const Decription = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.text};
`
const Subscribe = styled.button`
    font-size: 14px;
    background: #cc1a00;
    font-weight: 500;
    color: white;
    border: none;
    border-radius: 2px;
    height: max-content;
    padding: 10px 20px;
    cursor: pointer;
`

const Video = () => {
    console.log("state",useSelector((state) => state.video));
    const {currentUser} = useSelector((state) => state.user)
    const {currentVideo} = useSelector((state) => state.video)
    console.log("currentVideo",currentVideo);
    // console.log("currentUser",currentUser);
    // console.log("33333333333333",useSelector((state) => state.user));
    console.log("state.video",useSelector((state) => state.video));
    console.log("state",useSelector((state) => state));
    const dispatch = useDispatch();
    const path = useLocation().pathname.split("/")[2]
    const [channel,setChannel] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            try {
                const videoRes = await axios.get(`/videos/find/${path}`)
                const channelRes = await axios.get(`/users/find/${videoRes.data.userId}`)
                setChannel(channelRes.data)
                dispatch(fetchSuccess(videoRes.data))
                console.log("111111111111111",videoRes.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData()
    },[path,dispatch])
    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe
                        width="100%"
                        height="600"
                        src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </VideoWrapper>
                {/* <Title>{currentVideo.title}</Title> */}
                <Details>
                    {/* <Info>{currentVideo.views} views • {format(currentVideo.createdAt)}</Info> */}
                    <Buttons>
                        {/* <Button><ThumbUpOutlinedIcon />{currentVideo.likes?.length}</Button> */}
                        <Button><ThumbDownOffAltOutlinedIcon /> Dislike</Button>
                        <Button>
                            <ReplyOutlinedIcon /> Share
                        </Button>
                        <Button>
                            <AddTaskOutlinedIcon /> Save
                        </Button>
                    </Buttons>
                </Details>
                <Hr/>
                <Channel>
                    <ChannelInfo>
                        <Image src={ChannelPhoto}/>
                        <ChannelDetail>
                            <ChannelName>{channel.name}</ChannelName>
                            <ChannelCounter>{channel.subscribers} subscribers</ChannelCounter>
                           {/* <Decription>{currentVideo.desc}</Decription> */}
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe>Subscribe</Subscribe>
                </Channel>
                <Hr/>
                <Comments/>
            </Content>
            {/* <Recommendation>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
            </Recommendation> */}
        </Container>
    )
}

export default Video