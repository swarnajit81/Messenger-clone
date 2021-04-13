import "./App.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button, InputLabel, Input } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Message from "./Message";
import "./Message.css";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  const [messeges, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please Enter Your Name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=399&h=399"></img>
      <h1>Messenger Clone?!!</h1>
      <h3>Welcome {username}</h3>

      <form className="app_form">
        <FormControl className="app_FormControl">
          <Input
            className="value"
            placeholder="Enter a message...."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="app_Icons"
            disabled={!input}
            variant="outlined"
            variant="contained"
            color="secondary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messeges.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
