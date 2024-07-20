document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('form').addEventListener("submit", function (event){
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var pass = document.getElementById('password').value;
        var date = document.getElementById('date').value;
        var explain = document.getElementById('explain').value;
        var nameRegex = /^[A-Za-z\s]+$/;
        var emailRegex = /^[\dA-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/;
        var passRegex = /^[\dA-Za-z\W]+$/;

        if (name == '' || email == '' || pass == '' || date == '' || explain == 'write your problem' || !nameRegex.test(name) || !emailRegex.test(email) || !passRegex.test(pass)){
            alert('Please fill the data with valid field');
            event.preventDefault(); // Prevent form submission if validation fails
        } else {
            alert('Name:' + name + '\nEmail:' + email + '\nPassword:' + pass + '\nDate:' + date  + '\nSuggestion:' + explain);
        }
    });
});
