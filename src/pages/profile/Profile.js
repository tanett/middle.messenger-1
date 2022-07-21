
import ProfileTmpl from './Profile.tmpl.hbs'

import './style.css'

import InputTextProfile from '../../components/InputTextProfile/InputTextProfile';

export default function Profile() {

    const onGoBack =()=>{
       // window.location.pathname='/chatList'
    }

    //profile data in component

    const inputsList = [
        {id: 'email',name:'email',type: 'text',label:'Почта', placeholder: 'pochta@yandex.ru', errorMessage: ''},
        {id: 'login',name:'login',type: 'text',label:'Логин', placeholder: 'Ivan', errorMessage: ''},
        {id: 'first_name',name:'first_name',type: 'text',label:'Имя',  placeholder: 'Ivan', errorMessage: ''},
        {id: 'second_name',name:'second_name',type: 'text',label:'Фамилия', placeholder: 'Ivanov', errorMessage: ''},
        {id: 'display_name',name:'display_name',type: 'text',label:'Имя в чате', placeholder: 'vanya', errorMessage: ''},
        {id: 'phone',name:'phone',label:'Почта',type: 'text',placeholder: '+79659959598', errorMessage: ''},
    ]

    const inputs = inputsList.map(item=>{
        return InputTextProfile(item.id,item.name,item.label, item.type, item.placeholder, item.errorMessage, )
    })


//btn in profile
    const btnList = [
        {id:'changePassw', text:'Изменить пароль', classNames:'buttonLink' },
        {id:'changeData', text:'Изменить данные', classNames:'buttonLink' },
        {id:'out', text:'Выйти', classNames:'buttonLink buttonLink_red' },
    ]

    const content = ProfileTmpl({
        func: onGoBack() ,
        inputs,
        btnList,
        name: 'Иван'

    })

    return content
}
