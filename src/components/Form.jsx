import React from 'react';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Container = styled.div`
  /* padding: 50px; */
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  flex: 1;
`

const UserPicture = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-size: cover;
`

const Username = styled.input`
  font-size: 16px;
  padding: 5px; 
  width: 70%;
`

const LoadPic = styled.input`
  margin: 14px 0;
`

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 2;
`

const Input = styled.input`
  width: 90%;
  font-size: 16px;
  padding: 5px; 
`

const TextArea = styled.textarea`
  padding: 5px; 
  width: 90%;
  font-size: 16px;
  resize: none;
  margin: 16px 0;
`

const Button = styled.button`
  font-size: 16px;
  padding: 10px;
  background-color: transparent;
  border: 1px solid #3D0C11;
  border-radius: 10px;
  font-weight: 500;
`

export default function Form(props) {

  const [open, setOpen] = useState(false);

  const [post, setPost] = useState({
    id: '',
    username: '',
    title: '',
    text: '',
    img: '',
  })

  const handleClick = () => {
    if (post.username === '' || post.title === '' || post.text === '') {
      setOpen(true);
      return
    }
    const newPost = { ...post, id: Date.now() }
    setPost({
      id: '',
      username: '',
      title: '',
      text: '',
      img: '',
    });
    return props.addNewPost(newPost)
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handlePicture = (e) => {
    console.log(e.target.files);
    setPost({ ...post, img: URL.createObjectURL(e.target.files[0]) });
  }

  return (
    <Container>
      <Wrapper>
        <UserContainer>
          { !post.img ? <AccountCircleIcon style={{ fontSize: "80px" }} /> :  <UserPicture  src={post.img}/>}
          <LoadPic type={'file'} onChange={handlePicture} accept="image/png, image/gif, image/jpeg" key={Date.now()} />
          <Username placeholder='Введите имя' value={post.username} onChange={(e) => setPost({ ...post, username: e.target.value })} />
        </UserContainer>
        <PostContainer>
          <Input placeholder='Название поста' value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} />
          <TextArea placeholder='Пост...' value={post.text} onChange={(e) => setPost({ ...post, text: e.target.value })} />
          <Button onClick={handleClick}>Добавить пост</Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Для добавления поста заполните все поля
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>OK</Button>
            </DialogActions>
          </Dialog>
        </PostContainer>
      </Wrapper>
    </Container>
  )
}
