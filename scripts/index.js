import { initialCards, Card } from "./Card.js";
import { inputData, FormValidator } from "./FormValidator.js";

const popupProfile = document.querySelector(".popup-profile-edit");
const popupAddCard = document.querySelector(".popup-add-card");
const profileEditButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const nameInput = document.querySelector(".popup__input_type_name");
const descriptionInput = document.querySelector(
  ".popup__input_type_description"
);
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__subtitle");
const cardTitleInput = document.querySelector(".popup__input_type_card-title");
const cardImageLinkInput = document.querySelector(
  ".popup__input_type_image-link"
);
const formProfileEdit = popupProfile.querySelector(".popup__container");
const formAddCard = popupAddCard.querySelector(".popup__container");
const sectionWithCards = document.querySelector(".cards");
const photoViewPopup = document.querySelector(".popup-photo-view");
const imagePopupPicture = document.querySelector(".popup-photo-view__image");
const imageCaption = document.querySelector(".popup-photo-view__title");
let formList;
const formValidators = {};
const popups = document.querySelectorAll(".popup");

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    evt.target.classList.contains("popup_opened") && closePopup(popup);
    evt.target.classList.contains("popup__close") && closePopup(popup);
  });
});

const enableValidation = (inputData) => {
  formList = Array.from(document.querySelectorAll(inputData.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(inputData, formElement);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(inputData);

function handleCardClick(title, link) {
  imagePopupPicture.src = link;
  imagePopupPicture.alt = title;
  imageCaption.textContent = title;
  openPopup(photoViewPopup);
}

//Open popup
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscapeKey);
}

//Open popup (profile edit)
function openPopupProfile() {
  formValidators["profileEdit"].resetValidation();
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

//Open popup (card add)
function openPopupAddCard() {
  formValidators["addCard"].resetValidation();
  openPopup(popupAddCard);
}

//Popups close
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscapeKey);
}

function handleEscapeKey(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

//Submit button click (profile edit)
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup(popupProfile);
}

function createCard(link, title) {
  const card = new Card(link, title, ".card-template", handleCardClick);
  return card.generateCard();
}

//Add new card
function addCard(link, title) {
  const card = createCard(link, title);
  sectionWithCards.prepend(card);
}

//Submit button click (add card)
function submitCard(evt) {
  evt.preventDefault();
  addCard(cardImageLinkInput.value, cardTitleInput.value);
  closePopup(popupAddCard);
  cardTitleInput.value = "";
  cardImageLinkInput.value = "";
  console.log(cardTitleInput);
}

//Event listeners
profileEditButton.addEventListener("click", openPopupProfile);
addCardButton.addEventListener("click", openPopupAddCard);
formProfileEdit.addEventListener("submit", handleProfileFormSubmit);
formAddCard.addEventListener("submit", submitCard);

//Add 6 default cards
initialCards.forEach((card) => {
  addCard(card.link, card.name);
});
