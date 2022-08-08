import React from 'react'
import styled from 'styled-components'
import VideoPhoto from "../img/1.jpg"
import ChannelPhoto from "../img/2.jpg"
import { Link } from "react-router-dom"

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

const Card = ({type}) => {
    return (
        <Link to="/video/test" style={{textDecoration:"none"}}>
        <Container type={type}>
            <Image type={type} src={VideoPhoto}/>
            <Details type={type}>
                <ChannelImage type={type} src={ChannelPhoto}/>
                <Texts>
                    <Title>Test Video</Title>
                    <ChannelName>React Node</ChannelName>
                    <Info>521,635 • 1 day ago</Info>
                </Texts>
            </Details>
        </Container>
        </Link>
    )
}

export default Card