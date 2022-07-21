
import './style.css'
import SignInTmpl from './signIn.hbs'
import Button from '../../components/Button/Button';
import Fieldset from '../../components/Fieldset/Fieldset';



export default function SignIn() {

const onSubmit =()=>{
    window.location.pathname='/chatList'
}

//inputs in component
const inputList = [
    {id:'login', name:'login', label:'Логин', type:'text', placeholder:'Логин', errorMessage:'error'},
    {id:'password', name:'password', label:'Пароль', type:'password', placeholder:'Пароль', errorMessage:''},
]


    const content = SignInTmpl({ func: onSubmit ,
        btnPr: Button("Войти", "button_primary"),
        fieldset: Fieldset(inputList, "signIn_fieldset")
    })

    return content
}


