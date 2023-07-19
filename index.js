// navbar toggling
const navbarShowBtn = document.querySelector(".navbar-show-btn");
const navbarCollapseDiv = document.querySelector(".navbar-collapse");
const navbarHideBtn = document.querySelector(".navbar-hide-btn");
const token = JSON.parse(localStorage.getItem("token"));
const signin = document.getElementById("signin");
const signup = document.getElementById("signup");
const user = document.getElementById("user");
const appointment = document.getElementById("appoint");
const makeappoint = document.getElementById("makeappoint");
const logout = document.getElementById("logout");
if (token != null) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
  Toast.fire({
    icon: "success",
    title: "Signed in successfully",
  });
  signin.style.display = "none";
  signup.style.display = "none";
  user.style.display = "block";
  makeappoint.style.display = "block";
} else {
  user.style.display = "none";
  signin.style.display = "block";
  signup.style.display = "block";
  makeappoint.style.display = "none";
}
logout.addEventListener("click", () => {
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  user.style.display = "none";
  signin.style.display = "block";
  signup.style.display = "block";
  window.location.href = "index.html";
});
navbarShowBtn.addEventListener("click", function () {
  navbarCollapseDiv.classList.add("navbar-show");
});
navbarHideBtn.addEventListener("click", function () {
  navbarCollapseDiv.classList.remove("navbar-show");
});
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
