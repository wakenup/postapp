import { useState } from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import PostList from './components/PostList';

const Container = styled.div`
  background-color: #D3F9B5;
  width: 42%;
  height: 100%;
  min-height: 80vh;
  margin: 40px auto;
  padding: 40px;
  border-radius: 10px;
`

function App() {

  const [posts,setPosts] = useState([
    {
      id: '1',
      username: 'Мартин',
      title: 'Python',
      text: 'Loream isum erqqw vcxvf ghgf klgfd.',
    },
    {
      id: '2',
      username: 'Алекс',
      title: 'Python',
      text: 'Loream isum erqqw vcxvf ghgf klgfd.',
    }
  ]);

 

  const addNewPost = (post) => {
    setPosts([...posts,post]);
  }

  const removePost = (removePost) => {
    console.log(removePost);
    setPosts(posts.filter((post) => post.id != removePost.id));
  }

  return (
    <Container>
      <Form addNewPost={addNewPost}/>
      <PostList posts={posts} removePost={removePost} setPosts={setPosts}/>
    </Container>
  );
}

export default App;
