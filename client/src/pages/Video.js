import React from 'react'
import styled from "styled-components"
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ChannelPhoto from "../img/2.jpg"
import Comments from '../components/Comments';
import Card from '../components/Card';

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
    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe
                        width="100%"
                        height="600"
                        src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </VideoWrapper>
                <Title>Test Video</Title>
                <Details>
                    <Info>7,948,154 views • Jun 22, 2022</Info>
                    <Buttons>
                        <Button><ThumbUpOutlinedIcon /> 123</Button>
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
                            <ChannelName>React Node</ChannelName>
                            <ChannelCounter>200K subscribers</ChannelCounter>
                            <Decription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic qui laboriosam, corrupti blanditiis recusandae consectetur beatae molestias possimus nobis! Ab.</Decription>
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe>Subscribe</Subscribe>
                </Channel>
                <Hr/>
                <Comments/>
            </Content>
            <Recommendation>
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
            </Recommendation>
        </Container>
    )
}

export default Video