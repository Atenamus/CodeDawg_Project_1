function populateDoctorsTable(doctors) {
    const doctorsBody = document.getElementById("doctors-body");
    doctorsBody.innerHTML = "";
    doctors.forEach((doctor) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${doctor.name}</td>
          <td>${doctor.specialization}</td>
          <td>${doctor.price}</td>
          <td><button class="book-button" data-doctor-id="${doctor.id}">Book</button></td>
        `;
        doctorsBody.appendChild(row);
      });
    }
    async function bookDoctor(event) {
        if (event.target.classList.contains("book-button")) {
          const doctorId = event.target.dataset.doctorId;
          try {
            const response = await fetch(`http://localhost:8080/doctors/${doctorId}`);
            const doctor = await response.json();
      
            if (true) {
              // Retrieve the user ID from local storage
              const booking = {
                doctor
              };
      
              const bookingResponse = await fetch("http://localhost:8080/bookings", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(booking),
              });
      
              if (bookingResponse.ok) {
                alert("Booking Successful");
                window.location.href="../index.html";            
              } else {
                alert("Booking failed");
                throw new Error("Booking failed");
              }
            } else {
              alert("DOCTOR Not Available");
            }
          } catch (error) {
            alert("Error while fetching");
            console.error("Error:", error);
          }
        }
      }
      
    const doctors = JSON.parse(localStorage.getItem("doctors"));
    populateDoctorsTable(doctors);
const doctorsTable = document.getElementById("doctors-body");
doctorsTable.addEventListener("click",bookDoctor);