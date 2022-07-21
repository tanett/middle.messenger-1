import MessageTmpl from './Message.hbs'
import './style.css'



export default function (id,text, image, date, classNames, ){

    return MessageTmpl({id, text, image, date , classNames})
}
