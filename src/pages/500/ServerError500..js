
import './style.css'
import ErrorPage from '../../components/ErrorPage/ErrorPage'
import ServerErrorTmpl from './ServerError500.hbs'




export default function ServerError500() {


    return ServerErrorTmpl({error: ErrorPage(
             '500',
             'Мы уже фиксим',
            '/chatList',
             'Назад к чатам'

        )})
}


