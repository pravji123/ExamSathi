async function login(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  const res = await fetch("data/admins.json");
  const data = await res.json();

  const user = data.admins.find(
    a => a.email === email && a.password === password
  );

  if(!user){
    msg.innerText = "Invalid email or password";
    return;
  }

  localStorage.setItem("adminUser", JSON.stringify(user));
  location.href = "dashboard.html";
}
