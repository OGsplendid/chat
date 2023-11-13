import { IMessage } from "../../App"
import { Message } from "../Message/Message"
import { Response } from "../Response/Response"
import { Typing } from "../Typing/Typing"

export type TMessagesProps = {
  list: IMessage[],
}

export const MessageHistory = ({ list = [] }: TMessagesProps) => {

  return (
    <ul className="chat">
      {list.map(message => (
        message.type === 'message'
          ? <Message message={message} /> : message.type === 'response'
          ? <Response message={message} /> : <Typing message={message} />
      ))}
    </ul>
  )
}