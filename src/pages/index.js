import "./index.css";
import { initialCards } from "../scripts/utils/constants.js";
import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { Section } from "../scripts/components/Section.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import { PopupWithConfirmation } from "../scripts/components/PopupWithConfirmation.js";
import {
  inputData,
  profileAvatar,
  profileEditButton,
  addCardButton,
  nameInput,
  descriptionInput,
  photoViewPopupSelector,
  addCardPopupSelector,
  profileEditPopupSelector,
  avatarUpdatePopupSelector,
  deletionConfirmationPopupSelector,
  cardTemplateSelector,
} from "../scripts/utils/constants.js";
import { Avatar } from "../scripts/components/Avatar";

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

//Deletion confirmation popup
const popupDeletionConfirmation = new PopupWithConfirmation(
  deletionConfirmationPopupSelector,
  handleDeletionConfirmationSubmit
);
popupDeletionConfirmation.setEventListeners();

//Add new card popup
const popupCardAdd = new PopupWithForm(addCardPopupSelector, submitCard);
popupCardAdd.setEventListeners();

//Profile edit popup
const popupProfileEdit = new PopupWithForm(
  profileEditPopupSelector,
  handleProfileFormSubmit
);
popupProfileEdit.setEventListeners();

//Avatar update popup
const popupAvatarUpdate = new PopupWithForm(
  avatarUpdatePopupSelector,
  handleAvatarUpdateFormSubmit
);
popupAvatarUpdate.setEventListeners();

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
  const userInfoObj = userInfo.getUserInfo();
  nameInput.value = userInfoObj.name;
  descriptionInput.value = userInfoObj.description;
}

//Open popup (card add)
function openPopupAddCard() {
  formValidators["addCard"].resetValidation();
  popupCardAdd.open();
}

//Open popup (avatar update)
function openPopupAvatarUpdate() {
  formValidators["avatarUpdate"].resetValidation();
  popupAvatarUpdate.open();
}

//Submit button click (profile edit)
function handleProfileFormSubmit() {
  userInfo.setUserInfo(nameInput.value, descriptionInput.value);
  popupProfileEdit.close();
}

//Submit button click (add card)
function submitCard(item) {
  createCard(item.link, item.title);
  popupCardAdd.close();
}

//Submit button click (avatar update)
function handleAvatarUpdateFormSubmit({ link }) {
  const avatar = new Avatar(link, profileAvatar);
  avatar.setNewAvatar();
  popupAvatarUpdate.close();
}

//Submit button click (deletion confirmation)
function handleDeletionConfirmationSubmit(cardId) {
  //Delete card with cardId
}

function handleTrashButtonClick(cardId) {
  popupDeletionConfirmation.open(cardId);
}

function handleCardClick(title, link) {
  photoViewPopup.open(title, link);
}

//Add new card
function createCard(link, title) {
  const card = new Card(
    link,
    title,
    cardTemplateSelector,
    handleCardClick,
    handleTrashButtonClick
  );
  const cardElement = card.generateCard();
  cardsList.addItem(cardElement);
}

//Event listeners
profileEditButton.addEventListener("click", openPopupProfile);
addCardButton.addEventListener("click", openPopupAddCard);
profileAvatar.addEventListener("click", openPopupAvatarUpdate);
