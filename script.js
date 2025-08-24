//Animate hero section
const t1 = gsap.timeline({
  defaults:{
  duration:1
  
  }
})
t1.from(".hero h1",{
  opacity:0,
  y:30,
  delay:0.5,
  stagger:-1
})
t1.from(".hero p",{
  opacity:0,
  y:30,
  delay:0.1,
  stagger:-1
})
t1.fromTo(".hero .btn",{
  opacity:0,
  
  y:30,
  delay:0.1,
},{
  opacity:1,
  scale:1
})

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("appointmentModal");
  const btn = document.getElementById("appointmentBtn");
  const closeBtn = document.querySelector(".close");
  const form = document.getElementById("appointmentForm");

  if (!modal || !btn || !closeBtn || !form) return;

  // Open modal
  btn.addEventListener("click", () => {
    modal.style.display = "block";
    gsap.from(".modal-content", {
      opacity: 0,
      y: -50,
      duration: 0.5,
      ease: "power2.out"
    });
  });

  // Close modal
  closeBtn.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });

  // Form submit
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Appointment booked successfully!");
    modal.style.display = "none";
    form.reset();
  });
});
