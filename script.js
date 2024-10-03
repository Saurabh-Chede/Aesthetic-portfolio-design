document.addEventListener("DOMContentLoaded", () => {
    const homeSection = document.getElementById("home");
    homeSection.scrollIntoView({ behavior: "smooth" });
  });

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-in");
    
    setTimeout(() => {
      sections.forEach(section => {
        section.classList.add("visible");
      });
    }, 100);
  });


  document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll("header");
    
    // Create an intersection observer
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the section is in view

    // Observe each section
    headers.forEach(header => {
      observer.observe(header);
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('backgroundSound');

    // Attempt to autoplay the sound
    audio.play().catch(function(error) {
      // Autoplay prevented, listen for user interaction
      document.body.addEventListener('click', function() {
        audio.play();
      }, { once: true }); // Only require one click to start the audio
    });
  });