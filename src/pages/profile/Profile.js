
import ProfileTmpl from './Profile.tmpl.hbs'

import './style.css'

export default function Profile() {

    const onGoBack =()=>{
       // window.location.pathname='/chatList'
    }

    //profile data in component
    const fieldList = [
        {name:'Почта', value: 'pochta@yandex.ru'},
        {name:'Логин', value: 'ivanivanov'},
        {name:'Имя', value: ' Иван'},
        {name:'Фамилия', value: 'Иванов'},
        {name:'Имя в чате', value: 'Иван'},
        {name:'Телефон', value: '+7 (909) 967 30 30'},
    ]


//btn in profile
    const btnList = [
        {id:'changePassw', text:'Изменить пароль', classNames:'buttonLink' },
        {id:'changeData', text:'Изменить данные', classNames:'buttonLink' },
        {id:'out', text:'Выйти', classNames:'buttonLink buttonLink_red' },
    ]

    const content = ProfileTmpl({
        func: onGoBack() ,
        fieldList,
        btnList,
        name: 'Иван'

    })

    return content
}
