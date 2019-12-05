// EmailJS Initializing
(function () {
    emailjs.init("user_xtETVtBPLvNcldb5PMb0S");
  })();

// Contact Form Send Message Function
function sendM() {
    document.getElementById("loader").style.display = 'block';
    var obj = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value
    }
    var templateParams = {
      'to_name': 'Samad Ali',
      'from_email': obj.email,
      'message_html': obj.message,
      'from_subject' : obj.subject,
      "from_name": obj.name
    };

    emailjs.send('gmail', 'template_UmaFNZ1x', templateParams)
      .then(function (response) {
        document.getElementById("loader").style.display = 'none';
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value ="";
        Swal.fire({
          type: 'success',
          title: 'Your message has been sent.',
          text: 'I will try to get back to you as soon as possible. Thanks.',
        })
      }, function (error) {
        document.getElementById("loader").style.display = 'none';
        Swal.fire({
          type: 'error',
          title: 'Sending Unsuccesfull!',
          text: error.message,
        })
      });

  }
