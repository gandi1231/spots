const editProfileBtn = document.querySelector(".profile__edit-btn");

const editProfileModal = document.querySelector("#edit-profile-modal");

const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const editProfileFormElement = document.querySelector(
  "#edit-profile-modal .modal__form"
);

const editProfileNameG = document.querySelector(".profile__name");

const editProfileDescriptionG = document.querySelector(".profile__description");

const editProfileNameInput = document.querySelector("#profile-name-input");

const editProfileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

const addProfileBtn = document.querySelector(".profile__add-btn");

const addProfileModal = document.querySelector("#new-post-modal");

const addProfileCloseBtn = addProfileModal.querySelector(".modal__close-btn");

const addCardFormElement = document.querySelector(
  "#new-post-modal .modal__form"
);
const addLinkInput = document.querySelector("#image-link-input");
const addNameInput = document.querySelector("#caption-input");

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
  editProfileNameInput.value = editProfileNameG.textContent;
  editProfileDescriptionInput.value = editProfileDescriptionG.textContent;
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

addProfileBtn.addEventListener("click", function () {
  addProfileModal.classList.add("modal_is-opened");
});

addProfileCloseBtn.addEventListener("click", function () {
  addProfileModal.classList.remove("modal_is-opened");
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  editProfileNameG.textContent = editProfileNameInput.value;
  editProfileDescriptionG.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

editProfileFormElement.addEventListener("submit", handleProfileFormSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(addNameInput.value, addLinkInput.value);
  addProfileModal.classList.remove("modal_is-opened");
}

addCardFormElement.addEventListener("submit", handleAddCardSubmit);
