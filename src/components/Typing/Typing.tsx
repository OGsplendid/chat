import { IMessageProps } from "../../App";

export const Typing = ({ message }: IMessageProps) => {

  const { name } = message.from;

  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-name">{name}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">...typing</div>
    </li>
  )
}
