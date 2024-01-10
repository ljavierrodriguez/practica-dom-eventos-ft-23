let form = document.querySelector('form');
let link = document.querySelector('a')

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let error = false;
    
    let msgError = document.querySelector('.error')

    let username = document.getElementById('username')
    let password = document.getElementById('password')


    if (username.value == ''){
        username.style.border = '1px solid red';
        error = true
    } else {
        username.style.border = '0';
    }

    if (password.value == ''){
        password.style.border = '1px solid red';
        error = true
    } else {
        password.style.border = '0';
    }

    if(error){
        msgError.style.display = 'block';
        msgError.innerHTML = "Please, you have errors"
    } else {
        msgError.style.display = 'none';
        msgError.innerHTML = ""
        evt.target.submit()
    }


})
link.addEventListener('click', (e) => {
    e.preventDefault()
    alert("Estas tratando de crear una cuenta");
})


let buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e.target)
    })
})