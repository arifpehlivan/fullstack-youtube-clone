import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Photo from "../img/2.jpg"
import Comment from './Comment'
import axios from "axios"
import { useSelector } from 'react-redux'

const Container = styled.div`
    
`
const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #999;
`
const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.soft};
    outline: none;
    background: transparent;
    padding: 5px;
    width: 100%;
`

const Comments = ({videoId}) => {
    const {currentUser} = useSelector((state) => state.user)
    const [comments,setComments] = useState([])
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await axios.get(`/comments/${videoId}`)
                setComments(res.data)
            } catch (err) {
                
            }
        }
        fetchComments()
    },[videoId])
    return (
        <Container>
            <NewComment>
                <Avatar src={Photo}/>
                <Input placeholder='Add a comment...'/>
            </NewComment>
            {comments.map(comment=>(
                <Comment key={comment._id} comment={comment}/>
            ))}
            
        </Container>
    )
}

export default Comments