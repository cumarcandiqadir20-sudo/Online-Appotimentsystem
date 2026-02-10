// DOM Selection
const form = document.getElementById('registrationForm');
const message = document.getElementById('message');

// Form submit event
form.addEventListener('submit', function(event) {
    message.textContent = ''; // Clear previous messages
    let errors = [];

    // Fullname validation
    const fullname = document.getElementById('fullname').value.trim();
    if(fullname.length < 3) {
        errors.push("Fadlan geli magacaaga oo sax ah (ugu yaraan 3 xaraf).");
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
    if(!emailPattern.test(email)) {
        errors.push("Fadlan geli email sax ah.");
    }

    // Phone validation
    const phone = document.getElementById('phone').value.trim();
    const phonePattern = /^[0-9]{7,15}$/;
    if(!phonePattern.test(phone)) {
        errors.push("Fadlan geli lambarka telefoon sax ah (7–15 digits).");
    }

    // Faculty validation
    const faculty = document.getElementById('faculty').value;
    if(faculty === "") {
        errors.push("Fadlan dooro kulliyadda.");
    }

    // Certificate validation
    const certificate = document.getElementById('certificate').files[0];
    if(!certificate) {
        errors.push("Fadlan geli shahaadada dugsiga sare.");
    }

    // ID card validation
    const idcard = document.getElementById('idcard').files[0];
    if(!idcard) {
        errors.push("Fadlan geli ID Card / Exam Card.");
    }

    // Prevent submission if there are errors
    if(errors.length > 0) {
        event.preventDefault();
        message.innerHTML = errors.join('<br>');
    }
});
