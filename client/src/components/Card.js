import React from 'react'
import styled from 'styled-components'
import VideoPhoto from "../img/1.jpg"
import ChannelPhoto from "../img/2.jpg"

const Container = styled.div`
    width: 260px;
    margin-bottom: 45px;
    cursor: pointer;
    box-sizing: border-box;
`
const Image = styled.img`
    width: 100%;
    height: 202px;
    background: #999;
`
const Details = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 12px;
`
const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #999;
`
const Texts = styled.div``
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

const Card = () => {
    return (
        <Container>
            <Image src={VideoPhoto}/>
            <Details>
                <ChannelImage src={ChannelPhoto}/>
                <Texts>
                    <Title>Test Video</Title>
                    <ChannelName>React Node</ChannelName>
                    <Info>521,635 • 1 day ago</Info>
                </Texts>
            </Details>
        </Container>
    )
}

export default Card