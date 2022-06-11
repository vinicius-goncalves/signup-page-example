const formContainer = document.querySelector('[data-js="form"]')
const inputDetails = document.querySelectorAll('[data-js="input-details"]')

const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

const validateForm = (element, classToAdd, classToRemove) => {
    element.parentElement.classList.add(classToAdd)
    element.parentElement.classList.remove(classToRemove)
}


formContainer.addEventListener('input', (event) => {
    event.preventDefault()

    if(username.value === '') {
        validateForm(username, 'wrong', 'correct')
    }else {
        validateForm(username, 'correct', 'wrong')
    }

    if(!email.value.match(/^[a-zA-Z0-9]+@[a-z^A-Z]+\.[a-zA-Z0-9]+$/)) {
        validateForm(email, 'wrong', 'correct')
    }else {
        validateForm(email, 'correct', 'wrong')
    }

    if(password.value === '') {
        validateForm(password, 'wrong', 'correct')
    }else {
        validateForm(password, 'correct', 'wrong')
    }
})

formContainer.addEventListener('submit', (event) => {
    event.preventDefault()

    const x = Array.from(inputDetails)
    const itemValidation = x.every(item => {
        return item.className.includes('correct')
    })

    itemValidation 
        ? console.log('Todos os items foram validados') 
        : console.log('Um erro acontecue, verifique os detalhes e tente novamente')
})