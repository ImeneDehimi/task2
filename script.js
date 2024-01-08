function verify(e) {
    e.preventDefault();
    var password = document.validationform.password.value;
    console.log(password)
    if(password.length <5){
        return alert("password should contain more than 5 characters" )
    }
} 