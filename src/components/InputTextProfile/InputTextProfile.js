import Handlebars from 'handlebars'

import InputTextProfileTmpl from './InputTextProfile.hbs'
import './style.css'



export default function (id, name ,label, type, placeholder, errorMessage, ) {

    const input = InputTextProfileTmpl({ id, name ,label, type, placeholder, errorMessage, })

  // const inputEl = window.querySelector(`#${id}`)
  //   const inputLabel = inputEl.previousSibling
  //
  //   console.log(inputEl, inputLabel)
  //
  //   inputEl.addEventListener('input', function (event){
  //       if(event.target.focused) {
  //           inputLabel.classList.add('visible')
  //       } else {inputLabel.classList.remove('visible')}
  //   })

    return input
}
