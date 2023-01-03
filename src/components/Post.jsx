import React from 'react'
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { Reorder } from "framer-motion"

const Container = styled.div`
    display: flex;
    align-items: center;
    height:100px;
    cursor: grab;
    margin: 20px 0;
    background-color: white;
    border-radius: 30px;
    padding: 10px;
`


const UserInfo = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100%;
`

const UserPicture = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-size: cover;
`

const Username = styled.span`
    font-size: 20px;
`

const PostInfo = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    padding: 0 20px;
    flex: 4;
    height: 100%;
`

const PostTitle = styled.span`
    font-size: 22px;
    font-weight: 400;
`

const PostText = styled.div`
    font-size: 16px;
`   

const Button = styled.button`
    margin: 0 20px;
    padding: 8px;
    font-size: 16px;
    background-color: transparent;
    border: 1px solid #3D0C11;
    border-radius: 10px;
`



export default function Post({ post, removePost }) {

    const handleClick = () => {
        removePost(post);
    }

    return (
        <Reorder.Item value={post}>
            <Container>
                <UserInfo>
                    {!post.img ? <AccountCircleIcon style={{ fontSize: "60px" }} /> : <UserPicture  src={post.img}/>}
                    <Username>{post.username}</Username>
                </UserInfo>
                <PostInfo>
                    <PostTitle>{post.title}</PostTitle>
                    <PostText>{post.text}</PostText>
                </PostInfo>
                <Button onClick={handleClick}>Удалить</Button>
            </Container>
        </Reorder.Item>
    )
}
