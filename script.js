document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const mobile = document.getElementById("mobile").value;
  const userType = document.getElementById("userType").value;

  const msg = document.getElementById("responseMessage");

  if (fullName && email && password && mobile && userType) {
    msg.innerText = "Registration Successful!";
    msg.style.color = "lightgreen";
  } else {
    msg.innerText = "Please fill all the fields!";
    msg.style.color = "red";
  }
});
