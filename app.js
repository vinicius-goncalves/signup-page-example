const formContainer = document.querySelector('[data-js="form"]')
const inputDetails = document.querySelectorAll('[data-js="input-details"]')

const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

// inputDetails.forEach(item => {
//     item.addEventListener('click', (event) => {
//         if(event.target.id === "username") {
            
//         }
//     })
// })


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
        email.parentElement.classList.remove('correct')
        email.parentElement.classList.add('wrong')
    }else {
        email.parentElement.classList.remove('wrong')
        email.parentElement.classList.add('correct')
    }

    if(password.value === '') {
        password.parentElement.classList.remove('correct')
        password.parentElement.classList.add('wrong')
    }else {
        password.parentElement.classList.add('correct')
        password.parentElement.classList.remove('wrong')
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