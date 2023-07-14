const uname = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const but = document.getElementById("signup");
let state = false;
let user_exist = true;
function showerror(element, message) {
  const parent = element.parentElement;
  const error = parent.querySelector(".error");
  error.innerText = message;
  parent.classList.add("error");
  parent.classList.remove("success");
}
function showsuccess(element) {
  const parent = element.parentElement;
  const error = parent.querySelector(".error");
  error.innerText = "";
  parent.classList.remove("error");
  parent.classList.add("success");
}
function validation() {
  const username = uname.value.trim();
  const useremail = email.value.trim();
  const userpass = pass.value.trim();
  if (username == "") {
    showerror(uname, "username cannot be empty");
    state = false;
  } else {
    showsuccess(uname);
    state = true;
  }
  if (useremail == "") {
    showerror(email, "email cannot be empty");
    state = false;
  } else {
    showsuccess(email);
    state = true;
  }
  if (userpass == "") {
    showerror(pass, "password cannot be empty");
    state = false;
  } else if (userpass.length < 8) {
    showerror(pass, "Password must be atleast 8 character");
    state = false;
  } else {
    showsuccess(pass);
    state = true;
  }
}
function checkexistinguser() {
  fetch("http://localhost:8080/users", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((check) => {
      const comparison = check.find(
        (ele) => ele.email === email.value && ele.password === pass.value
      );
      if (comparison != null && state == true) {
        user_exist = true;
        Swal.fire({
          title: "Seems you are already registered",
          showDenyButton: true,
          confirmButtonText: "Login",
          denyButtonText: `Cancel`,
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "../signin/signin.html";
          }
        });
      } else {
        user_exist = false;
      }
    });
}
but.addEventListener("click", () => {
  state = false;
  validation();
  checkexistinguser();
  if (state == true && user_exist == false) {
    swal.fire({
      title: "Account created Successfully",
      text: "Welcome!",
      icon: "success",
    });
    const dataobj = {
      email: email.value,
      name: uname.value,
      password: pass.value,
    };
    setTimeout(() => {
      fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataobj),
      })
        .then((res) => res.json())
        .then((data) => {
          window.location.href = "../signin/signin.html";
        });
    }, 1500);
  }
});
