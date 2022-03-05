import { initialCards, Card } from "./Card.js";
import { inputData, FormValidator } from "./FormValidator.js";
export { photoViewPopup, openPopup };

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
const photoViewCloseButton = document.querySelector(
  ".popup-photo-view__close-button"
);

//Open popup
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupProfileByEsc);
}

//Open popup (profile edit)
function openPopupProfile() {
  const formValidator = new FormValidator(
    inputData,
    popupProfile.querySelector(inputData.formSelector)
  );
  openPopup(popupProfile);
  formValidator.resetFields(popupProfile);
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  formValidator.toggleSubmitButton(popupProfile, inputData);
}

//Open popup (card add)
function openPopupAddCard() {
  const formValidator = new FormValidator(
    inputData,
    popupAddCard.querySelector(inputData.formSelector)
  );

  openPopup(popupAddCard);
  formValidator.resetFields(popupAddCard);
  formValidator.disableSubmitButton(
    popupAddCard.querySelector(inputData.submitButtonSelector)
  );
}

//Popups close
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupProfileByEsc);
}

function popupClose(evt) {
  evt.target === evt.currentTarget && closePopup(evt.target);
}

function closePopupClickOutside(popup) {
  popup.addEventListener("click", popupClose);
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

function closePopupProfileByEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

//Submit button click (profile edit)
function formSubmitHandlerProfileEdit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup(popupProfile);
}

//Add new card
function addCard(link, title) {
  const card = new Card(link, title, ".card-template");
  sectionWithCards.prepend(card.generateCard());
}

//Submit button click (add card)
function submitCard(evt) {
  evt.preventDefault();
  addCard(cardImageLinkInput.value, cardTitleInput.value);
  closePopup(popupAddCard);
  cardTitleInput.value = "";
  cardImageLinkInput.value = "";
  const formValidator = new FormValidator(
    inputData,
    popupAddCard.querySelector(inputData.formSelector)
  );
  formValidator.disableSubmitButton(
    popupAddCard.querySelector(inputData.submitButtonSelector)
  );
}

//Event listeners
profileEditButton.addEventListener("click", openPopupProfile);
addCardButton.addEventListener("click", openPopupAddCard);
popupProfileCloseButton.addEventListener("click", closePopupProfile);
popupAddCardCloseButton.addEventListener("click", closePopupAddCard);
photoViewCloseButton.addEventListener("click", closePopupPhotoView);
formProfileEdit.addEventListener("submit", formSubmitHandlerProfileEdit);
formAddCard.addEventListener("submit", submitCard);

closePopupClickOutside(popupProfile);
closePopupClickOutside(popupAddCard);
closePopupClickOutside(photoViewPopup);

//Add 6 default cards
initialCards.forEach((card) => {
  addCard(card.link, card.name);
});
