import blogFetch from '../axios/config'

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./NewPost.css";

const NewPost = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const createPost = async (e) => {
    e.preventDefault();
    const post = { title, body, userId: 1 };
    try {
      await blogFetch.post("https://jsonplaceholder.typicode.com/posts", {
        body: post,
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='new-post'>
      <h2>Inserir novo Post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className='form-control'>
          <label htmlFor="title">Titulo:</label>
          <input type="text" name="title" id='title'
            placeholder='Digite o Titulo'
            onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className='form-control'>
          <label htmlFor="body">Conteudo:</label>
          <textarea name="body" id="body" placeholder='Digite o conteudo'
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <input type='submit' value='Criar Post' id="btn" className='btn'></input>
      </form>
    </div>
  )
}

export default NewPost