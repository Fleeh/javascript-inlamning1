
 // FUNCTIONS EXPORTED TO SCRIPT.JS //

 // MINIMUM LENGTH // 

export function validateMinLength(element, minLength = 2) {


    if(element.value.length < minLength) {
        document.getElementById(`error-${element.id}`).innerText = `Måste innehålla minst ${minLength} tecken`
        return false
     } else {
        document.getElementById(`error-${element.id}`).innerText = ``
        return true
     }
        
}   

 // EMAIL VALIDATON // 

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

 // PASSWORD VALIDATON // 

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

 // AGE VALIDATON // 

export function validateAge(element) {
    var birthday = element.value;

    var optimizedBirthday = birthday.replace(/-/g, "/");

    var myBirthday = new Date(optimizedBirthday);

    var currentDate = new Date().toJSON().slice(0, 10) + " 01:00:00";

    var result = ~~((Date.now(currentDate) - myBirthday) / 31557600000);

    if (result < 18) {
        document.getElementById(
            `error-${element.id}`
        ).innerText = `Du måste vara 18 år eller äldre`;
        return false;
    }   else {
        document.getElementById(`error-${element.id}`).innerText = ``;
        return true;
    }
        
}
