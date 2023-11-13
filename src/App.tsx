import './App.css'
import { MessageHistory } from './components/MessageHistory/MessageHistory'
import { messages } from './messages'

export interface IFrom {
  name: string,
}

export interface IMessage {
  id: string,
  from: IFrom,
  type: string,
  time: string,
  text?: string,
}

export interface IMessageProps {
  message: IMessage,
}

function App() {

  return (
    <div className='container'>
      <MessageHistory list={messages} />
    </div>
  )
}

export default App
