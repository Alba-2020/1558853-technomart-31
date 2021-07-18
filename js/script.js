const modalFeedback = document.querySelector(".get-lost");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close");
const feedbackForm = feedbackPopup.querySelector(".feedback-form");
const feedbackUsername = feedbackPopup.querySelector(".feedback-username");
const feedbackEmail = feedbackPopup.querySelector(".feedback-useremail");

const modalMap = document.querySelector(".map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

modalFeedback.addEventListener("click", function () {
  feedbackPopup.classList.add("modal-show");
  feedbackUsername.focus();
});

modalMap.addEventListener("click", function () {
  mapPopup.classList.add("modal-show");
});

if (storage) {
  feedbackEmail.value = storage;
  feedbackEmail.focus();
} else {
}

feedbackEmail.focus();

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
  mapPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackUsername.value || !feedbackEmail.value) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-error");
    feedbackPopup.classList.add("modal-error");
  } else {
    localStorage.setItem("email", feedbackEmail.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
    }

    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

