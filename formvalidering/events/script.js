import { validateAge, validateEmail, validateMinLength, validatePassword } from "./validate.js";

// DOM ELEMENT

const regForm = document.getElementById("regForm")
const firstName = document.getElementById("firstName")
const errorFirstName = document.getElementById("error-firstName")

const lastName = document.getElementById("lastName")
const errorLastName = document.getElementById("error-lastName")

const email = document.getElementById("email")
const erroremail = document.getElementById("error-email")

const password = document.getElementById("password")
const errorPassword = document.getElementById("error-password")

const confirmPassword = document.getElementById("confirm-password")
const errorconfirmPassword = document.getElementById("error-confirm-password")

const birth = document.getElementById("birth")
const errorbirth = document.getElementById("error-birth")

const adress = document.getElementById("adress")
const erroradress = document.getElementById("error-adress")

const zipcode= document.getElementById("zipcode")
const errorzipcode = document.getElementById("error-zipcode")



document.getElementById("email").addEventListener("keyup", function(e) {
        validateEmail(e.target)

})


document.getElementById("password").addEventListener("keyup", function(e) {
    validatePassword(e.target)

})

document.getElementById("adress").addEventListener("keyup", function(e) {
    validateMinLength(e.target, 2)

})

document.getElementById("zipcode").addEventListener("keyup", function(e) {
    validateMinLength(e.target, 5)

})

document.getElementById("birth").addEventListener("change", function(e) {
    validateAge(e.target)

})

document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault()

    for (let element of e.target)

        switch(element.type) {
            case 'text':
                validateMinLength(element)
                 break;

            case 'email':
                validateEmail(element)
                break;

            case 'password':
             validatePassword(element)
                 break;

            case 'birth':
                getAge(element)
                break;
        }
})



// FUNKTIONER

function ValidateLength(event, name, minLength = 2) {
    const error = document.getElementById(`error-${event.target.id}`)


    if(event.target.value === "")
        error.innerText = `Du måste ange ett ${name}`
    else {
        if(event.target.value.length < minLength)
        error.innerText =`${name}et måste bestå av minst ${minLength} tecken`
    else 
        error.innerText = ""
    }
}


function comparePassword(password, confirmPassword) {
    const error = document.getElementById(`error-${confirmPassword.target.id}`)

    if(password !== confirmPassword.target.value)
        error.innerText = 'Lösenorden matchar inte'
    else
        error.innerText = ""
}





// CALLBACK FUNKTIONER


firstName.addEventListener("keyup", function(event) {
    const name = "Förnamn"
    ValidateLength(event, name)
})

lastName.addEventListener("keyup", function(event) {
    const name = "Efternamn"
    ValidateLength(event, name)
})



confirmPassword.addEventListener("keyup", function(event) {
    const password = document.getElementById("password").value
    comparePassword(password, event)
})


