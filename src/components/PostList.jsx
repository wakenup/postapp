import React from 'react'
import styled from 'styled-components';
import Post from './Post';
import { Reorder } from "framer-motion"

const Container = styled.div`
    margin-top: 50px;
`

export default function PostList({ posts, removePost, setPosts }) {

  return (
    <Container>
      <Reorder.Group axys='y' values={posts} onReorder={setPosts} style={{listStyle: 'none'}}>
        {posts.map((post) => {
          return <Post post={post} key={post.id} removePost={removePost} />
        })}
      </Reorder.Group>
    </Container>
  )
}
