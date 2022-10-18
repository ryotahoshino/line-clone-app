import React, { useEffect, useState } from 'react';
import SignOut from './SignOut';
import {auth, db} from '../firebase.js';
import SendMessage from './SendMessage';

function Line() {
  const [massages, setMassages] = useState([]);
  useEffect(() => {
    db.collection("massages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMassages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      {console.log(massages)}
      <SignOut />
      <div className='msgs'>
        {massages.map(({id, text, photoURL, uid}) => (
          <div>
            <div key={id} className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"}`}>
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  )
}

export default Line;