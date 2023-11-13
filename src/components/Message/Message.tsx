// import React from "react";
// import { IFrom } from "../MessageHistory/MessageHistory";
import { IMessageProps } from "../../App";

export const Message = ({ message }: IMessageProps) => {

  const { name } = message.from;
  const { time, text } = message;

  return (
    <li className="message my-message align-right">
      <div className="message-data align-right">
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        <span className="message-data-name me">{name}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">{text}</div>
    </li>
  )
}
