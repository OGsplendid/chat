import { IMessageProps } from "../../App";

export const Response = ({ message }: IMessageProps) => {

  const { name } = message.from;
  const { time, text } = message;

  return (
    <li className="message other-message align-left">
      <div className="message-data align-left">
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        <span className="message-data-name align-left">{name}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-left">{text}</div>
    </li>
  )
}
