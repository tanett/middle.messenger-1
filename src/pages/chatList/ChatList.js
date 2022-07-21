import './style.css'
import ChatListTmpl from './ChatList.hbs'
import Message from '../../components/Message/Message';
import ChatItem from 'src/components/ChatItem/ChatItem';


export default function ChatList() {

    //chats

    const chats = [{id:'11',text: '554 555', chatName: 'GHJG',avatar:undefined, date: 'sun',count: 0 , classNames:''},
        {id:'22',text: '555555', chatName: 'yyyy',avatar:undefined, date: 'mun',count: 5 , classNames:''},
    ]

    const chatsList = chats.map((item)=>{

        return ChatItem(item.id,item.text,item.chatName,item.avatar,item.date, item.count ===0? false: item.count, item.classNames)
    })

// messages
    const messages = [
        {
            id: '1',
            author: 'Вася',
            text: 'ddd',
            image: undefined,
            date: '15:58'
        },
        {
            id: '1',
            author: 'Вася',
            text: 'ddd',
            image: undefined,
            date: '15:58'
        },
        {
            id: '1',
            author: 'you',
            text: 'ddd',
            image: undefined,
            date: '15:58'
        },
    ]
    const messagesList = messages.map((item) => {

        const className = item.author === 'you' ? 'messagesItem__host' : 'messagesItem__interlocutor'
        return Message(item.id, item.text, item.image, item.date, className,)
    }).join('')
    return ChatListTmpl({
        chatsList: chatsList,
        messagesList: messagesList
    })
}
