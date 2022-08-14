import { Question } from "./question"
import {createModal, isValid} from "./functions"
import { authWithEmailAndPassword, getForm } from "./auth"
import "./style.css"

const form = document.getElementById('form')
const btn = form.querySelector('#btn')
const input = form.querySelector('#question-input')
const plusbtn = document.getElementById('plus-btn')

window.addEventListener('load', Question.renderList)
form.addEventListener('submit', submitInputHandler)
plusbtn.addEventListener('click', openModal)
input.addEventListener('input', () => {
    btn.disabled = !isValid(input.value)
})

function submitInputHandler(event){
    event.preventDefault()

    if (isValid(input.value)){
        const question = {
            text: input.value.trim(),
            date: new Date().toJSON()
        }
        btn.disabled = true
        
        Question.create(question).then(() => {
            input.value = ''
            input.className = ''
            btn.disabled = false
        })
    }
}

function openModal() {
    createModal('Авторизация', getForm())
    document.getElementById('auth-form').addEventListener('submit', authHandler, {once: true})
  }

  function authHandler(event){
    event.preventDefault()

    const btn = event.target.querySelector('button')
    const email = event.target.querySelector('#email').value
    const password = event.target.querySelector('#password').value

    btn,disabled = true
    authWithEmailAndPassword(email, password)
    .then(Question.fetch)
    .then(renderModal)
    .then(() => btn.disabled = false)
}

function renderModal(content){
    if (typeof content === 'string'){
        createModal('Error', content)
    }else{
        createModal('List of questions',content)
    }
}