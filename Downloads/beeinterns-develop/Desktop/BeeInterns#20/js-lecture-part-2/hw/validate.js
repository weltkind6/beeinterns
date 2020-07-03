function validate(data) {
    const { login, password, confirmPassword, license, firstName, gender } = data;

    if (!login || !password) {
        alert('Укажите логин/пароль');
    } else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать');
    } else if (!license) {
        alert('Необходимо согласие');    
    } 
     else if (!firstName){
        alert('Имя-то введите!');
    }
     else if (firstName === "Beeline"){
        alert('Кто-то уже забил этот ник =(');
    }
    else if (firstName === "Beeinterns"){
        alert('Кто-то уже забил этот ник =(');
    }
    else if (firstName === "Bee"){
        alert('Кто-то уже забил этот ник =(');
    }
    else if (gender === "male") {
        alert('Увожаемый ' + firstName + ' заявка успешно создана!');
    }
    else {
        alert('Увожаемая ' + firstName + ' заявка успешно создана!');
    }
    
    /*
    else {
        alert('Увожаемыйй ' + firstName + ' заявка успешно создана!');
    }
    */
       
}
