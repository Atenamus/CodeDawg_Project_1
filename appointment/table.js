var PatientsDetailsContainer = document.getElementById("table");
const pname = localStorage.getItem("name");
const date = localStorage.getItem("date");
const bookingDiv = document.createElement("div");
bookingDiv.classList.add("booking");
bookingDiv.innerHTML = `
    <div class="detail">
      <span class="label">Patient Name:</span>
      <span class="value">${pname}</span>
    </div>
    <div class="detail">
      <span class="label">Date:</span>
      <span class="value">${date}</span>
    </div>
  `;
PatientsDetailsContainer.appendChild(bookingDiv);
window.location.href("../index.html");
