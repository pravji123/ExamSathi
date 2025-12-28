const user = JSON.parse(localStorage.getItem("adminUser"));

if(!user){
  location.href = "login.html";
}

