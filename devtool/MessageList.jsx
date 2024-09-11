import React from "react";
import { useAppState } from "./overmind";

/*
  This is just a component to help with development to show what messages were sent via the widget.
*/

const MessageCard = ({ body, customer_mobile_number, customer_name }) => (
  <div style={{ border: "1px solid grey", marginBottom: "12px" }}>
    <ul>
      <li>{customer_name}</li>
      <li>{customer_mobile_number}</li>
      <li>{body}</li>
    </ul>
  </div>
);

const MessageList = ({ shopId }) => {
  const state = useAppState();

  return (
    <div style={{ flex: "1" }}>
      <b>Sent Messages Dev Tool</b>
      {state[shopId]?.map((message) => (
        <MessageCard {...message} />
      ))}
      <p hidden={!!state[shopId]}>
        <i style={{ color: "gray" }}>No messages sent yet</i>
      </p>
    </div>
  );
};

export default MessageList;
