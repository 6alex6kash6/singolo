const navigation = document.querySelector(".navigation");
const submitButton = document.querySelector(".submit-button");
const messageBox = document.getElementById("message-box");
const okButton = document.getElementById("ok-button");
const verticalPhone = document.getElementById("phone-vertical");
const horizontalPhone = document.getElementById("phone-horizontal");
const imageWrapper = document.querySelector(".portfolio__gallery");
const carousel = document.querySelector(".carousel");
const previous = document.querySelector(".slider__button-left");
const next = document.querySelector(".slider__button-right");
const sliderWrapper = document.querySelector(".slider__wrapper");
let direction;

navigation.addEventListener("click", event => {
  navigation.querySelectorAll("a").forEach(element => {
    element.classList.remove("active");
  });
  event.target.classList.add("active");
});

next.addEventListener("click", () => {
  direction = -1;
  sliderWrapper.style.justifyContent = "flex-start";
  carousel.style.transform = "translate(100%)";
});

previous.addEventListener("click", () => {
  direction = 1;

  sliderWrapper.style.justifyContent = "flex-end";
  carousel.style.transform = "translate(-100%)";
});

carousel.addEventListener("transitionend", () => {
  if (direction === 1) {
    carousel.prepend(carousel.lastElementChild);
  } else {
    carousel.appendChild(carousel.firstElementChild);
  }

  carousel.style.transition = "none";
  carousel.style.transform = "translate(0)";
  setTimeout(() => {
    carousel.style.transition = "all 0.5s";
  }, false);
});

verticalPhone.addEventListener("click", event => {
  const verticalDisplay = document.getElementById("vertical-off");
  if (verticalDisplay.classList.contains("vertical-off")) {
    verticalDisplay.classList.remove("vertical-off");
  } else {
    verticalDisplay.classList.add("vertical-off");
  }
});

horizontalPhone.addEventListener("click", event => {
  const horizontalDisplay = document.getElementById("horizontal-off");
  if (horizontalDisplay.classList.contains("horizontal-off")) {
    horizontalDisplay.classList.remove("horizontal-off");
  } else {
    horizontalDisplay.classList.add("horizontal-off");
  }
});

imageWrapper.addEventListener("click", event => {
  if (event.target.tagName === "IMG") {
    imageWrapper.querySelectorAll("img").forEach(item => {
      item.classList.remove("img-active");
    });
    event.target.classList.add("img-active");
  }
});

submitButton.addEventListener("click", () => {
  const subject = document.getElementById("subject").value;
  const textarea = document.getElementById("textarea").value;
  const inputName = document.getElementById("name");
  const inputEmail = document.getElementById("email");
  document.getElementById("subject-input").innerText = subject;
  document.getElementById("textarea-input").innerText = textarea;
  if (subject === "") {
    document.getElementById("subj-p").innerText = "Без темы";
  }
  if (subject === "") {
    document.getElementById("describe-p").innerText = "Без описания";
  }
  if (inputName.checkValidity() && inputEmail.checkValidity()) {
    event.preventDefault();
  }
  messageBox.classList.remove("hidden");
});

okButton.addEventListener("click", () => {
  messageBox.classList.add("hidden");
});
