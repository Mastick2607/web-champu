// WhatsApp Configuration
const WHATSAPP_NUMBER = "573137018502" // Reemplaza con tu número de WhatsApp (código de país + número sin espacios ni símbolos)
const WHATSAPP_MESSAGE = "¡Hola! Estoy interesado en el Shampoo pinta canas color negro. ¿Podrían darme más información?"

// Function to open WhatsApp
function openWhatsApp() {
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE)
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
  window.open(whatsappURL, "_blank")
}

// Add event listeners to all WhatsApp buttons
document.addEventListener("DOMContentLoaded", () => {
  const whatsappBtn1 = document.getElementById("whatsappBtn")
  const whatsappBtn2 = document.getElementById("whatsappBtn2")
  const whatsappBtn3 = document.getElementById("whatsappBtn3")

  if (whatsappBtn1) {
    whatsappBtn1.addEventListener("click", (e) => {
      e.preventDefault()
      openWhatsApp()
    })
  }

  if (whatsappBtn2) {
    whatsappBtn2.addEventListener("click", (e) => {
      e.preventDefault()
      openWhatsApp()
    })
  }

  if (whatsappBtn3) {
    whatsappBtn3.addEventListener("click", (e) => {
      e.preventDefault()
      openWhatsApp()
    })
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
})

// Add scroll animation for elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".feature-card, .guarantee-card, .pain-point")

  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})
