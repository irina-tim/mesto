import { initialCards, Card } from "./Card.js";
import { inputData, FormValidator } from "./FormValidator.js";

const popupProfile = document.querySelector(".popup-profile-edit");
const popupAddCard = document.querySelector(".popup-add-card");
const profileEditButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const popupAddCardCloseButton = popupAddCard.querySelector(".popup__close");
const popupProfileCloseButton = popupProfile.querySelector(".popup__close");
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
const photoViewCloseButton = photoViewPopup.querySelector(".popup__close");
const imagePopupPicture = document.querySelector(".popup-photo-view__image");
const imageCaption = document.querySelector(".popup-photo-view__title");

const formList = Array.from(document.querySelectorAll(inputData.formSelector));
formList.forEach((formElement) => {
  const formValidator = new FormValidator(inputData, formElement);
  formValidator.enableValidation();
});

const formValidatorProfileEdit = new FormValidator(
  inputData,
  popupProfile.querySelector(inputData.formSelector)
);

const formValidatorAddCard = new FormValidator(
  inputData,
  popupAddCard.querySelector(inputData.formSelector)
);

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
  openPopup(popupProfile);
  formValidatorProfileEdit.resetFields(popupProfile);
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  formValidatorProfileEdit.toggleSubmitButton();
}

//Open popup (card add)
function openPopupAddCard() {
  openPopup(popupAddCard);
  formValidatorAddCard.resetFields(popupAddCard);
  formValidatorAddCard.disableSubmitButton();
}

//Popups close
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscapeKey);
}

function handleOverlayClick(evt) {
  evt.target === evt.currentTarget && closePopup(evt.target);
}

function closePopupClickOutside(popup) {
  popup.addEventListener("click", handleOverlayClick);
}

function closePopupProfile() {
  closePopup(popupProfile);
}

function closePopupAddCard() {
  closePopup(popupAddCard);
}

function closePopupPhotoView() {
  closePopup(photoViewPopup);
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
  formValidatorProfileEdit.disableSubmitButton();
}

//Event listeners
profileEditButton.addEventListener("click", openPopupProfile);
addCardButton.addEventListener("click", openPopupAddCard);
popupProfileCloseButton.addEventListener("click", closePopupProfile);
popupAddCardCloseButton.addEventListener("click", closePopupAddCard);
photoViewCloseButton.addEventListener("click", closePopupPhotoView);
formProfileEdit.addEventListener("submit", handleProfileFormSubmit);
formAddCard.addEventListener("submit", submitCard);

closePopupClickOutside(popupProfile);
closePopupClickOutside(popupAddCard);
closePopupClickOutside(photoViewPopup);

//Add 6 default cards
initialCards.forEach((card) => {
  addCard(card.link, card.name);
});
