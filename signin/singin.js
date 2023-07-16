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
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
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