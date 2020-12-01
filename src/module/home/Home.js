import { Button, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './home.css';
import HTTP_SERVICE from '../../config/Services';

export default function Home() {
  const [form, setForm] = useState({
    username: '',
    password: ''
  });
  
  useEffect(() => {
    if(localStorage.getItem('author')){
      window.location.hash = '/cashier';
    }
  }, []);

  const inputOnChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  }

  const onLogin = () => {
    console.log(form);
    HTTP_SERVICE.login(form).then(res => {
      if (res.size > 0) {
        let author;
        res.docs.forEach(doc => {
          author = doc.id;
          localStorage.setItem('author', author);
          window.location.hash = '/cashier';
        });
      }
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="root">
      <div className="box">
        <h1 className="header">Mari Vaping</h1>
        <TextField className="inputField" type="text" label='Username' onChange={inputOnChange} id='username' />
        <TextField className="inputField" type="password" label='Password' onChange={inputOnChange} id='password' />
        <Button className="loginButton" variant="contained" color="primary" onClick={onLogin}>
          Login
        </Button>
      </div>
    </div>
  );
}