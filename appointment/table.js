var PatientsDetailsContainer = document.getElementById("table");
const pname = localStorage.getItem("Name");
const date = localStorage.getItem("Date");
const phone = localStorage.getItem("Phone");
const time = localStorage.getItem("Time");
const bookingDiv = document.createElement("div");
bookingDiv.classList.add("booking");
bookingDiv.innerHTML = `
    <div class="detail">
      <span class="label">Patient Name:</span>
      <span class="value">${pname}</span>
    </div>
    <div class="detail">
      <span class="label">Phone:</span>
      <span class="value">${phone}</span>
    </div>
    <div class="detail">
      <span class="label">Date:</span>
      <span class="value">${date}</span>
    </div>
    <div class="detail">
      <span class="label">Time:</span>
      <span class="value">${time}</span>
    </div>
  `;
PatientsDetailsContainer.appendChild(bookingDiv);