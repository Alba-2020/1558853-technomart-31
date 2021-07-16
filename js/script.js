const modalFeedback = document.querySelector(".get-lost");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close");
const feedbackForm = feedbackPopup.querySelector(".feedback-form");
const feedbackUsername = feedbackPopup.querySelector(".feedback-username");
const feedbackEmail = feedbackPopup.querySelector(".feedback-useremail");

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

if (storage) {
    feedbackEmail.value = storage;
    feedbackEmail.focus();
} else {
  }
  
  
feedbackEmail.focus();
;

feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
    feedbackPopup.classList.remove("modal-error");
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
      if (loginPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-show");
      }
    }
  });

