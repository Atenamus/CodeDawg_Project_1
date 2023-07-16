const email = document.getElementById("email");
const pass = document.getElementById("password");
const button = document.getElementById("signin");
button.addEventListener("click", () => {
  fetch("http://localhost:8080/users", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      const comparison = data.find(
        (ele) => ele.email === email.value && ele.password === pass.value
      );
      if (comparison != null) {
        localStorage.setItem("token", JSON.stringify(Date.now()));
        localStorage.setItem("id", JSON.stringify(comparison.id));
        window.location.href = "../index.html";
      } else {
        swal.fire({
          title: "Error!",
          text: "Invalid Credentials",
          icon: "error",
        });
      }
    });
});
