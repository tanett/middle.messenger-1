import Handlebars from 'handlebars'
import './style.css'
import SignUpTmpl from './signUp.hbs'
import Button from '../../components/Button/Button';

import Fieldset from '../../components/Fieldset/Fieldset';


Handlebars.registerPartial('SignUp', SignUpTmpl)

export default function SignUp() {

const onSubmit =()=>{
    window.location.pathname='/chatList'
}
//inputs in component
    const inputList = [
        {id:'email', name:'email', label:'Почта', type:'email', placeholder:'Почта', errorMessage:''},
        {id:'login', name:'login', label:'Логин', type:'text', placeholder:'Логин', errorMessage:''},
        {id:'first_name', name:'first_name', label:'Имя', type:'text', placeholder:'Имя', errorMessage:''},
        {id:'second_name', name:'second_name', label:'Фамилия', type:'text', placeholder:'Фамилия', errorMessage:''},
        {id:'phone', name:'phone', label:'Телефон', type:'text', placeholder:'Телефон', errorMessage:''},
        {id:'password', name:'password', label:'Пароль', type:'password', placeholder:'Пароль', errorMessage:''},
        {id:'passwordSubmit', name:'passwordSubmit', label:'Пароль(еще раз)', type:'password', placeholder:'Пароль', errorMessage:'error'},
    ]


    const content = SignUpTmpl({ func: onSubmit ,
        btnPr: Button("Зарегестироваться", "button_primary"),
        fieldset: Fieldset(inputList, "signUp_fieldset")
    })

    return content
}


