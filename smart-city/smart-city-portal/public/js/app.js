const slides = [
  {
    title: "Metro Expansion Project",
    description: "New metro line launching next month."
  },
  {
    title: "Smart Traffic System",
    description: "AI-based signals reduce congestion."
  },
  {
    title: "24/7 Water Supply",
    description: "New pipeline system installed."
  }
];

let currentIndex = 0;
let interval;

/* LOAD SLIDER */
function loadSlider() {
  const slider = document.getElementById("slider");
  const dotsContainer = document.getElementById("dots");

  slider.innerHTML = "";
  dotsContainer.innerHTML = "";

  slides.forEach((slide, index) => {
    const slideDiv = document.createElement("div");
    slideDiv.classList.add("slide");
    if (index === 0) slideDiv.classList.add("active");

    slideDiv.innerHTML = `
      <h3>${slide.title}</h3>
      <p>${slide.description}</p>
    `;

    slider.appendChild(slideDiv);

    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active-dot");
    dot.onclick = () => goToSlide(index);
    dotsContainer.appendChild(dot);
  });

  startAutoSlide();
}

/* NEXT SLIDE */
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
}

/* PREVIOUS SLIDE */
function prevSlide() {
  currentIndex =
    (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
}

/* GO TO SPECIFIC */
function goToSlide(index) {
  currentIndex = index;
  updateSlide();
}

/* UPDATE SLIDE */
function updateSlide() {
  const slideElements = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  slideElements.forEach((slide, index) => {
    slide.classList.remove("active");
    dots[index].classList.remove("active-dot");

    if (index === currentIndex) {
      slide.classList.add("active");
      dots[index].classList.add("active-dot");
    }
  });

  restartAutoSlide();
}

/* AUTO SLIDE */
function startAutoSlide() {
  interval = setInterval(nextSlide, 4000);
}

function restartAutoSlide() {
  clearInterval(interval);
  startAutoSlide();
}

document.addEventListener("DOMContentLoaded", loadSlider);

function logout(){
  localStorage.removeItem("role");
  window.location.href = "login.html";
}

function openService(service){
  window.location.href = service + ".html";
}
function openHelp(){
  alert("Welcome to Smart City Help Desk\n\n1. Login first\n2. Go to services\n3. Report problems\n4. Track updates on dashboard");
}

function toggleChat(){
  const chat = document.getElementById("chatBox");
  chat.style.display = chat.style.display === "block" ? "none" : "block";
}