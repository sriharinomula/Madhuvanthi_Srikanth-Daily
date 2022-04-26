function redirectToSignup() {
    location.href = "signup.html";
  }
  
  function redirectToLogin() {
    location.href = "login.html";
  }
  //handling user login and signup
  
  var userCount = 0;
  
  function validateUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("signup-user-email").value;
    const username = document.getElementById("signup-user").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    // const nameRegex = /^([a-zA-Z]\s){1,25}$/;
    if (localStorage.getItem(username) !== null) {
      alert("user already exits");
      return false;
    }
    if (localStorage.getItem(email) !== null) {
      alert("email already exits");
      return false;
    }
    // if (!nameRegex.test(name)) {
    //   console.log(
    //     `name can contain 1 to 25 characters only, no special characters or numbers are allowed`
    //   );
    //   return false;
    // }
  
    const emailRegex = /^([a-zA-Z0-9\.]+)@([a-zA-Z]+).com/;
    if (!emailRegex.test(email)) {
      alert(`email is invalid`);
      return false;
    }
  
    const userRegex = /([a-zA-Z0-9]+)/;
    if (!userRegex.test(username)) {
      alert("username can contain alphabets and numbers only");
      return false;
    }
    const passwordRegex = /^[A-Za-z]\w{7,14}$/;
  
    if (!passwordRegex.test(password)) {
      alert(
        "password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter"
      );
      return false;
    }
    if (password !== confirmPassword) {
      alert(`passwords to not match`);
      return false;
    }
    return true;
  }
  
  function createAccount() {
    if (!validateUser()) return;
  
    const userObject = {
      name: document.getElementById("name").value,
      username: document.getElementById("signup-user").value,
      password: document.getElementById("signup-password").value,
      email: document.getElementById("signup-user-email").value,
    };
    console.log(userObject);
    localStorage.setItem(userObject.username, JSON.stringify(userObject));
    userCount++;
    location.href = "login.html";
  }
  
  function loginUser() {
    const username = document.getElementById("login-user").value;
    const password = document.getElementById("login-password").value;
  
    const storedUser = localStorage.getItem(username);
    if (storedUser !== null) {
      const storedUserPassword = JSON.parse(storedUser).password;
      console.log(storedUserPassword);
      if (password === storedUserPassword) {
        location.href = "http://127.0.0.1:5500";
        const userData = localStorage.getItem(username);
        sessionStorage.setItem("user", userData);
      } else {
        alert(`incorrect password`);
      }
    } else {
      alert("user doesnot exists");
    }
  }
  
  
  
 
  
 
  
  function handleFeedback() {
    location.href = "http://localhost:5500/feedback";
  }