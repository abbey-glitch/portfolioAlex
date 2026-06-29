
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const project = document.getElementById("project").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
`*New Portfolio Contact*

👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
💼 Project: ${project}
📌 Subject: ${subject}

📝 Message:
${message}`;

    const phoneNumber = "448060862250";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");
});