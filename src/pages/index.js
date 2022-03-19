import { initialCards } from "../scripts/utils/constants.js";
import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { Section } from "../scripts/components/Section.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import {
  inputData,
  profileEditButton,
  addCardButton,
  nameInput,
  descriptionInput,
  photoViewPopupSelector,
  addCardPopupSelector,
  profileEditPopupSelector,
  cardTemplateSelector,
} from "../scripts/utils/constants.js";

let formList;
const formValidators = {};

//User info (profile edit)
const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  descriptionSelector: ".profile__subtitle",
});

//Photo view popup
const photoViewPopup = new PopupWithImage(photoViewPopupSelector);
photoViewPopup.setEventListeners();

//Add new card popup
const popupCardAdd = new PopupWithForm(addCardPopupSelector, submitCard);
popupCardAdd.setEventListeners();

//Profile edit popup
const popupProfileEdit = new PopupWithForm(
  profileEditPopupSelector,
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
  nameInput.value = userInfo.getUserInfo().name;
  descriptionInput.value = userInfo.getUserInfo().description;
}

//Open popup (card add)
function openPopupAddCard() {
  formValidators["addCard"].resetValidation();
  popupCardAdd.open();
}

//Submit button click (profile edit)
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  userInfo.setUserInfo(nameInput.value, descriptionInput.value);
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
  const card = new Card(link, title, cardTemplateSelector, handleCardClick);
  const cardElement = card.generateCard();
  cardsList.addItem(cardElement);
}

//Event listeners
profileEditButton.addEventListener("click", openPopupProfile);
addCardButton.addEventListener("click", openPopupAddCard);
