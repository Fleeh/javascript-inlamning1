export function validateMinLength(element, minLength = 2) {


    if(element.value.length < minLength) {
        document.getElementById(`error-${element.id}`).innerText = `Måste innehålla minst ${minLength} tecken`
        return false
     } else {
        document.getElementById(`error-${element.id}`).innerText = ``
        return true
     }
        
}   

export function validateEmail(element) {

    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(!regEx.test(element.value))  {
         document.getElementById(`error-${element.id}`).innerText = `Måste vara en giltig e-postadress.`
         return false
    } else {
        document.getElementById(`error-${element.id}`).innerText = ``
        return true
    }
}



export function validatePassword(element) {

    const regEx = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$/;

    if(!regEx.test(element.value))  {
        document.getElementById(`error-${element.id}`).innerText = `Lösenordet måste vara ett starkt lösenord.`
        return false
    } else {
        document.getElementById(`error-${element.id}`).innerText = ``
        return true
    }
}




 