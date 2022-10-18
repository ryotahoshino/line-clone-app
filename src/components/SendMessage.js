import React, { useState } from 'react';
import {db, auth} from "../firebase.js";
import firebase from "firebase/compat/app";
import { Input } from '@mui/material';
import SendIcon from "@mui/icons-material/Send"

function SendMessage() {
  const [massage, setMassage] = useState("");
  function sendMessage(e) {
    e.preventDefault();

    const {uid, photoURL} = auth.currentUser;

    db.collection("massages").add({
      text: massage,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setMassage("");
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className='sendMsg'>
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            placeholder='メッセージを入力してください'
            type="text"
            onChange={(e) => setMassage(e.target.value)}
            value={massage}
          />
          <SendIcon />
        </div>
      </form>
    </div>
  )
}

export default SendMessage