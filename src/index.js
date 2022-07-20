import Handlebars from 'handlebars'
import SignIn from './pages/signIn/signIn.js';
import DefaultComponentsTmpl from './components/defaultComponents/defaultComponents.hbs';
import SignUp from './pages/signUp/signUp';
import Profile from './pages/profile/Profile';

const App = () => {


    let component

    switch (window.location.pathname) {
        case '/signIn':{
            component = SignIn()
            break
        }
        case '/signUp':{
            component = SignUp()
            break
        }
        case '/chatList':{
            component = 'chatList'
            break
        }
        case '/profile':{
            component = Profile()
            break
        }
        case '/notFound':{
            component = '404 not found'
            break
        }
        case '/error':{
            component = 'error 500'
            break
        }
        default: {
            component = DefaultComponentsTmpl()
        }
    }

    return component
}

document.querySelector('#root').innerHTML = App();

