const name = document.getElementById("name1");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const date = document.getElementById("date");
const disease = document.getElementById("disease");
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});
const isValidEmail = () => {
  const re =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(String(email).toLowerCase());
};
const seterror = (element, message) => {
  const parent = element.parentElement;
  const error = parent.querySelector(".error");
  error.innerText = message;
  parent.classList.add("error");
  parent.classList.remove("success");
};
const setsuccess = (element) => {
  const parent = element.parentElement;
  const error = parent.querySelector(".error");
  error.innerText = "";
  parent.classList.remove("error");
  parent.classList.add("success");
};
const validateInputs = () => {
  const username = name1.value.trim();
  const useremail = email.value.trim();
  const userphone = phone.value.trim();
  if (username === "") {
    seterror(name1, "Username cannot be empty");
  } else {
    setsuccess(name1);
  }
  if (useremail === "") {
    seterror(email, "Email cannot be empty");
  } else if (isValidEmail(useremail)) {
    seterror(email, "Provide a valid email");
  } else {
    setsuccess(email);
  }
  if (userphone === "") {
    seterror(phone, "cannot be empty");
  } else if (userphone.length < 10) {
    seterror(phone, "cannot be less than 10");
  } else {
    setsuccess(phone);
  }
};
async function searchdoctors(event) {
  event.preventDefault();
  const name = document.getElementById("name1");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const date = document.getElementById("date");
  const disease = document.getElementById("disease");

  const pname = name1.value;
  const ph = phone.value;
  const dt = date.value;
  const showdisease = disease.value;

  const url = `http://localhost:8080/doctors?specialization=${showdisease}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data.length > 0) {
      localStorage.setItem("doctors", JSON.stringify(data));
      localStorage.setItem("name",pname);
      localStorage.setItem("date",dt);
      window.location.href = "doctors.html";
    } else {
      alert("No doctors found");
    }
  } catch (error) {
    alert("Error fetching the doctors");
    console.error("Error fetching doctors:", error);
  }
}
const bookingform = document.getElementById("form");
bookingform.addEventListener("submit", searchdoctors);
