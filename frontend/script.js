const API = "http://localhost:5000";

function login(){

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

fetch(API + "/auth/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
email:email,
password:password
})

})
.then(res=>res.json())
.then(data=>{

localStorage.setItem("token",data.token);

window.location="dashboard.html";

});

}
