import React from 'react'
import styled from "styled-components"
import Photo from "../img/2.jpg"

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`
const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #999;
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({ theme }) => theme.text};
`
const Name = styled.span`
    font-size: 14px;
    font-weight: 500;
`
const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.textSoft};
    margin-left: 5px;
`
const Text = styled.span`
    font-size: 14px;
`

const Comment = () => {
    return (
        <Container>
            <Avatar src={Photo}/>
            <Details>
                <Name>
                    John Doe <Date>1 day ago</Date>
                </Name>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, inventore. Atque veritatis accusamus assumenda animi. Quibusdam enim atque ipsam harum!
                </Text>
            </Details>
        </Container>
    )
}

export default Comment