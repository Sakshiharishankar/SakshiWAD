$(document).ready(function(){
    let users  =JSON.parse(localStorage.getItem("users")) ||[];
    let userList =$("#userList");
    
    if (users.length === 0){
        userList.html("<li> No user Registered yet !! </li>");
    }
    else
    {
        users.forEach(user => {
            userList.append(`<li>Name: ${user.name}, Email: ${user.email}, Mobile: ${user.mobile} </li>`);
            
        });
            
        }

    $("#delete").click(function () {
        if (users.length > 0){
            users.pop();
        localStorage.setItem("users",JSON.stringify(users));
        }
        else {
            alert("No registered users to delete")
        }
    })

    }


);