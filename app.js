const formContainer = document.querySelector('[data-js="form"]')
const inputDetails = document.querySelectorAll('[data-js="input-details"]')

const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

const validateForm = (element, classToAdd, classToRemove, errorMessage) => {
    element.parentElement.classList.add(classToAdd)
    element.parentElement.classList.remove(classToRemove)
    
    removeErrorMessage(element)
    setErrorMessage(element, errorMessage)
}

const setErrorMessage = (element, message) => {
    const newElement = document.createElement('small')
    newElement.innerText = message
    element.parentElement.appendChild(newElement)
    return newElement
}

const removeErrorMessage = (element) => {
    if(element.parentElement.querySelectorAll('small').length > 0) {
        element.parentElement.querySelector('small').remove()
    }
}

formContainer.addEventListener('input', (event) => {
    event.preventDefault()

    username.value === '' 
    ? validateForm(username, 'wrong', 'correct', 'Please, insert a valid username')
    : validateForm(username, 'correct', 'wrong', null)

    !email.value.match(/^[a-zA-Z0-9_]+@[a-z^A-Z]+\.[a-zA-Z0-9]+$/)
    ? validateForm(email, 'wrong', 'correct', 'Please, insert a valid email')
    : validateForm(email, 'correct', 'wrong', null)

    password.value === ''
    ? validateForm(password, 'wrong', 'correct', 'Please, insert a valid passwrod')
    : validateForm(password, 'correct', 'wrong', null)
})

formContainer.addEventListener('submit', (event) => {
    event.preventDefault()

    const arrayInputDetails = Array.from(inputDetails)
    const itemValidation = arrayInputDetails.every(item => {
        return item.className.includes('correct')
    })

    itemValidation 
        ? console.log('All of the items are correct') 
        : console.log('An error occurred, please try it again')
})