// function sendMail(){
//     var params={
//        name: document.getElemenById("name").value,
//        email: document.getElemenById("email").value,
//        subject: document.getElemenById("subject").value,
//        message: document.getElemenById("message").value,
//     };



// const serviceID="service_fp4sfal";
// const templateID="template_2f6i90s"

// emailjs.send(serviceID,templateID,params)
// .then(
//     res=>{
//             document.getElementById('name').value="";
//            document.getElementById('email').value=";"
//            document.getElementById('subject').value="";
//          document.getElementById('message').value="";
//          alert("Your Message Send Successfully");
//     })

// .catch((err)=>console.log(err));
// }
// function sendMail() {
//     var params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         subject: document.getElementById("subject").value,
//         message: document.getElementById("message").value,
//     };

//     const serviceID = "service_fp4sfal";   // replace with your actual service ID
//     const templateID = "template_2f6i90s"; // replace with your actual template ID

//     emailjs.send(serviceID, templateID, params)
//     .then(res => {
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("subject").value = "";
//         document.getElementById("message").value = "";

//         alert("✅ Your message was sent successfully!");
//     })
//     .catch(err => console.log(err));
// }
// Initialize EmailJS
(function () {
  emailjs.init("ZbUaf13Lu1fBe-Rf1"); // 🔑 Your public key
})();

// Send Mail Function
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_fp4sfal";   // 🔑 Your Service ID
  const templateID = "template_2f6i90s"; // 🔑 Your Template ID

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("contactForm").reset(); // Clear form
      alert("✅ Your message was sent successfully!");
    })
    .catch(err => {
      console.error("❌ EmailJS Error:", err);
      alert("⚠️ Failed to send message. Check console.");
    });
}
