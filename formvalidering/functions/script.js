


function ValidateLength(input, minLength = 2) {
    if(input.length > minLength)
        console.log(true)
    else
        console.log(false)
}

function confirmPassword(password, confirmPassword) {
    if(password === confirmPassword)
        console.log(true)
    else
        console.log(false)
}


//ValidateLength(document.getElementById("firstName").value, 2)
//ValidateLength(document.getElementById("lastName").value, 2)

let Inputpassword = document.getElementById("password").value
let InputconfirmPassword = document.getElementById("confirmPassword").value

confirmPassword(Inputpassword, InputconfirmPassword)