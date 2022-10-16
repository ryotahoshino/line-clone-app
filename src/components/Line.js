import React, { useEffect, useState } from 'react'
import SignOut from './SignOut'
import {db} from '../firebase.js';

function Line() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
    .orderBy("createdAt")
    .limit(50)
    .onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()))
    });
  }, []);
  return (
    <div>
      {console.log(messages)}
      <SignOut />
      <div className='msgs'>
        {messages.map(({id, text, photoURL, uid}) => {
          <div>
            <div key={id}>
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Line