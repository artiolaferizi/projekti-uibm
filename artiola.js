
  // Gjej formën
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // ndalon dërgimin default

    // Merr vlerat e fushave
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validim bazik
   
    if (fullName === "" || email === "" || message === "") {
      alert("Ju lutem plotësoni të gjitha fushat e kërkuara!");
      return;
    }

    // Validim email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)) {
      alert("Ju lutem vendosni një email të vlefshëm!");
      return;
    }

    // Nëse gjithçka është e saktë
    alert("Faleminderit " + fullName + "! Mesazhi juaj u dërgua me sukses.");

    // Pastrimi i formës
    form.reset();
  });


  //Konfirmimi i terminit
   function bookAlert() {
    alert("You have successfully booked your appointment 💖");
  }


  //Pricing plan
   function showPlanAlert(planName) {
    alert(`You selected the "${planName}" plan!`);
  }