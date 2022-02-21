// Imports
// import React from "react";
import { useState } from 'react';
import './App.css';

// Setup
const App = () => {
  // useState
  const [user, setUser] = useState();
  // List with empty array setted
  const [list, setList] = useState([]);
  // Post
  const [postContent, setPostContent] = useState(); 

  // Submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    if (postContent) {
      // ...list, postContent will be added to the list
      setList([...list, postContent]);
    }
  };

  return (
    <div className='App'>
      {/* Check for user */}
      { user ? <h1>Welcome, {user}</h1> : <h1>No user found...</h1> }
      {/* Take users input */}
      <input onChange={(e) => setUser(e.target.value)}></input>
      {/* Map */}
      <div>
        { list.map((item, index) => <h2 key={index}>{item}</h2>) }
      </div>
      {/* <h1>Hello</h1> */}
    </div>
  );
}

export default App;
