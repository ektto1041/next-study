"use client";

import { ChangeEventHandler, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export default function Page() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [msgInput, setMsgInput] = useState("");

  useEffect(() => {
    const socketInstance = io("http://localhost:8080");

    socketInstance.on("connect", () => {
      console.log("Socket Connected: ", socketInstance.id);
    });

    socketInstance.on("error", (error: Error) => {
      console.log("ass");
      console.log(error);
    });

    socketInstance.on("disconnect", () => {
      console.log("Socket Disconnected");
    });

    socketInstance.on("chat message", (msg: string) => {
      console.log(msg);
      setMessages((msgs) => [...msgs, msg]);
    });

    console.log(socketInstance);

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const onSendMessage = () => {
    if (socket) {
      socket.emit("chat message", `${name}: ${msgInput}`);
    }
  };

  const onChangeName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const onChangeMsgInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setMsgInput(e.target.value);
  };

  return (
    <>
      CHAT
      <div>
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>
      <div style={{ display: "flex", padding: "8px", gap: "8px" }}>
        <input
          type="text"
          style={{ flexGrow: 1 }}
          value={name}
          onChange={onChangeName}
        />
        <input
          type="text"
          style={{ flexGrow: 10 }}
          value={msgInput}
          onChange={onChangeMsgInput}
        />
      </div>
      <button onClick={onSendMessage}>Send</button>
    </>
  );
}
