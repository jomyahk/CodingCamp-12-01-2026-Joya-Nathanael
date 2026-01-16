// Welcome Name
let userName = prompt("Masukkan nama Anda:");
if (userName) {
  document.getElementById("welcomeText").innerText =
    "Hi " + userName + ", Welcome To Website";
}

// Form Validation
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("messageText").value.trim();

    if (!name || !email || !phone || !message) {
      alert("Semua field wajib diisi!");
      return;
    }

    if (!email.includes("@")) {
      alert("Email tidak valid!");
      return;
    }

    if (isNaN(phone)) {
      alert("Nomor telepon harus angka!");
      return;
    }

    document.getElementById("output").innerHTML = `
            <p><strong>Current Time:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Nomor Telepon:</strong> ${phone}</p>
            <p><strong>Pesan:</strong> ${message}</p>
        `;
  });
}
