import Handlebars from 'handlebars'
import SignIn from './pages/signIn/signIn.js';
import DefaultComponentsTmpl from './components/defaultComponents/defaultComponents.hbs';
import SignUp from './pages/signUp/signUp';
import Profile from './pages/profile/Profile';
import NotFoundPage from './pages/404/NotFoundPage';
import ServerError500 from './pages/500/ServerError500.';
import ChatList from './pages/chatList/ChatList';

const App = () => {

    Handlebars.registerHelper('stringifyFunc', function(fn) {
        return new Handlebars.SafeString("(" +
            fn.toString().replace(/\"/g,"\'") + ")()");
    });

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
            component = ChatList()
            break
        }
        case '/profile':{
            component = Profile()
            break
        }
        case '/notFound':{
            component = NotFoundPage()
            break
        }
        case '/error':{
            component = ServerError500()
            break
        }
        default: {
            component = DefaultComponentsTmpl()
        }
    }

    return component
}

document.querySelector('#root').innerHTML = App();

