$(document).ready(function(){
    const form =$("registration_form");
    $("#submit").click(function(){
        const user ={
            name: $("#name").val(),
            email: $("#email").val(),
            mobile: $("#mobile").val(),

        };
        let users =JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);
        localStorage.setItem("users",JSON.stringify(users));

        alert("User Resgistered Succesfully");
        form.reset();
    });
});