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

get-lost.addEventListener("click", function () {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");
    feedbackUsername.focus();
});

  

feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
  });

  feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackUsername.value || !feedbackEmail.value) {
    evt.preventDefault();
     } else {
        localStorage.setItem("email", feedbackEmail.value);
      }
});