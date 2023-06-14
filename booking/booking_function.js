document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("appointment-form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      var formData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        date: form.date.value,
        message: form.message.value
      };
  
      var message = `Appointment Request\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Date: ${formData.date}\nMessage: ${formData.message}`;
      alert(message);
  

      form.reset();
    });
  });
  