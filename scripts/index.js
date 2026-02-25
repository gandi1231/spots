// Todo pass settings object to the validation functions that are called in this file

const initialCards = [
  {
    name: "Golden Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileFormElement = document.querySelector(
  "#edit-profile-modal .modal__form",
);

const editProfileNameEl = document.querySelector(".profile__name");
const editProfileDescriptionEl = document.querySelector(
  ".profile__description",
);
const editProfileNameInput = document.querySelector("#profile-name-input");
const editProfileDescriptionInput = document.querySelector(
  "#profile-description-input",
);

const addProfileBtn = document.querySelector(".profile__add-btn");
const addProfileModal = document.querySelector("#new-post-modal");
const addProfileCloseBtn = addProfileModal.querySelector(".modal__close-btn");
const addProfileSubmitBtn = addProfileModal.querySelector(".modal__submit-btn");
const addCardFormElement = document.querySelector(
  "#new-post-modal .modal__form",
);
const addLinkInput = document.querySelector("#image-link-input");
const addNameInput = document.querySelector("#caption-input");

const previewModal = document.querySelector("#preview-modal");
const previewModalCloseBtn = previewModal.querySelector(
  ".modal__close-preview ",
);
const previewImageEl = previewModal.querySelector(".modal__image");
const previewCaptionEl = previewModal.querySelector(".modal__caption");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

const cardsList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");

  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardTitleEl.textContent = data.name;

  const cardLikeBtnEl = cardElement.querySelector(".card__like-button");
  cardLikeBtnEl.addEventListener("click", () => {
    cardLikeBtnEl.classList.toggle("card__like-button_active");
  });

  const cardDeleteBtnEl = cardElement.querySelector(".card__delete-button");
  cardDeleteBtnEl.addEventListener("click", () => {
    cardDeleteBtnEl.closest(".card").remove();
  });

  cardImageEl.addEventListener("click", () => {
    previewImageEl.src = data.link;
    previewImageEl.alt = data.name;
    previewCaptionEl.textContent = data.name;
    openModal(previewModal);
  });

  return cardElement;
}
function openModal(modal) {
  modal.classList.add("modal_is-opened");
}
function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileBtn.addEventListener("click", function () {
  openModal(editProfileModal);
  editProfileNameInput.value = editProfileNameEl.textContent;
  editProfileDescriptionInput.value = editProfileDescriptionEl.textContent;
});

editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

addProfileBtn.addEventListener("click", function () {
  openModal(addProfileModal);
});

addProfileCloseBtn.addEventListener("click", function () {
  closeModal(addProfileModal);
});

previewModalCloseBtn.addEventListener("click", function () {
  closeModal(previewModal);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  editProfileNameEl.textContent = editProfileNameInput.value;
  editProfileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}

editProfileFormElement.addEventListener("submit", handleProfileFormSubmit);

addCardFormElement.addEventListener("submit", handleAddCardSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const newcard = { name: addNameInput.value, link: addLinkInput.value };
  const cardElement = getCardElement(newcard);
  cardsList.prepend(cardElement);
  evt.target.reset();
  disableButton(addProfileSubmitBtn, config);
  closeModal(addProfileModal);
}

initialCards.forEach(function (item) {
  const cardElement = getCardElement(item);
  cardsList.append(cardElement);
});
