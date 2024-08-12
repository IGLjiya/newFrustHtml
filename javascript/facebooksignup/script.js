const yearElement = document.getElementById("year")
const currentYear = new Date().getFullYear()
for (let i = 1970; i <= currentYear; i++) {
    const option = document.createElement("option")
    option.value = i
    option.text = i
    yearElement.appendChild(option)
}

const monthElement = document.getElementById("day")
for (j = 1; j <= 31; j++) {
    const option = document.createElement("option")
    option.value = j
    option.text = j
    monthElement.appendChild(option)
}

function handleInput() {

    const error1 = document.getElementById("error1")
    const error2 = document.getElementById("error2")
    const error3 = document.getElementById("error3")
    const error4 = document.getElementById("error4")
    error1.innerHTML = ""
    error2.innerHTML = ""
    error3.innerHTML = ""
    error4.innerHTML = ""

    
}

// -------------------------------------------
function handleForm() {
    const fname = document.signup.fname.value
    const sname = document.signup.sname.value
    const email = document.signup.email.value
    const password = document.signup.password.value
    const error1 = document.getElementsByClassName("error")[0]
    const error2 = document.getElementsByClassName("error")[1]
    const error3 = document.getElementsByClassName("error")[2]
    const error4 = document.getElementsByClassName("error")[3]


    var fnamecheck = /^[A-Za-z]{3,20}$/gmi
    var snamecheck = /^[A-Za-z. ]{3,20}$/;
    var emailcheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var pswcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9@#$%^&*]{8,15}$/;


    if (fname == "") {
        error1.innerHTML = "<i>What's your Name?</i>"
        return false
    }
    if (fnamecheck.test(fname)) {
        error1.innerHTML = ""
    }
    else {
        error1.innerHTML = "<i>**First Name invalid</i>"
        return false
    }

    // ----------------------
    if (sname == "") {
        error2.innerHTML = "<i>What's your Surname?</i>"
        return false
    }
    if (snamecheck.test(sname)) {
        error2.innerHTML = ""
    }
    else {
        error2.innerHTML = "<i>**Surname is invalid</i>"
        return false
    }


    // ---------------------------
    if (email == "") {
        error3.innerHTML = "<i>What's your email?</i>"
        return false
    }
    if (emailcheck.test(email)) {
        error3.innerHTML = ""
    } else {
        error3.innerHTML = "<i>**Your email is invalid</i>"
        return false
    }


    // ---------------------------------
    if (password == "") {
        error4.innerHTML = "<i>Create a New Password?</i>"
        return false

    }
    if (pswcheck.test(password)) {
        error4.innerHTML = ""
    } else {
        error4.innerHTML = "<i>**Password is invalid</i>"
        return false
    }

}