import { initialCards, Card } from "./Card.js";
import { inputData, FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";

const profileEditButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const nameInput = document.querySelector(".popup__input_type_name");
const descriptionInput = document.querySelector(
  ".popup__input_type_description"
);
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__subtitle");
let formList;
const formValidators = {};

//Photo view popup
const photoViewPopup = new PopupWithImage(".popup-photo-view");
photoViewPopup.setEventListeners();

//Add new card popup
const popupCardAdd = new PopupWithForm(".popup-add-card", submitCard);
popupCardAdd.setEventListeners();

//Profile edit popup
const popupProfileEdit = new PopupWithForm(
  ".popup-profile-edit",
  handleProfileFormSubmit
);
popupProfileEdit.setEventListeners();

const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      createCard(item.link, item.name);
    },
  },
  ".cards"
);

//Add 6 default cards
cardsList.renderItems();

//Validation
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

//Open popup (profile edit)
function openPopupProfile() {
  formValidators["profileEdit"].resetValidation();
  popupProfileEdit.open();
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

//Open popup (card add)
function openPopupAddCard() {
  formValidators["addCard"].resetValidation();
  popupCardAdd.open();
}

//Submit button click (profile edit)
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  popupProfileEdit.close();
}

//Submit button click (add card)
function submitCard(evt, item) {
  evt.preventDefault();
  createCard(item.link, item.title);
  popupCardAdd.close();
}

function handleCardClick(title, link) {
  photoViewPopup.open(title, link);
}

//Add new card
function createCard(link, title) {
  const card = new Card(link, title, ".card-template", handleCardClick);
  const cardElement = card.generateCard();
  cardsList.addItem(cardElement);
}

//Event listeners
profileEditButton.addEventListener("click", openPopupProfile);
addCardButton.addEventListener("click", openPopupAddCard);
