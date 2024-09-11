import React, { useEffect } from "react";
import { useActions } from "./overmind";

/*
    Listens for new messages from the widget. Just used as a devtool to show messages. Irrevlant to business logic
*/

const MessageListener = () => {
  const actions = useActions();

  useEffect(() => {
    const handler = (event) => {
      if (event.data?.event_source !== "ikeono") return;
      actions.addMessage(event.data);
    };
    window.addEventListener("message", handler, false);
  }, []);
  return null;
};

export default MessageListener;
