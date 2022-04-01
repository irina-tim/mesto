import "./index.css";
import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { Section } from "../scripts/components/Section.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import { PopupWithConfirmation } from "../scripts/components/PopupWithConfirmation.js";
import { Api } from "../scripts/components/Api.js";
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
  submitButtonAddCardPopup,
  submitButtonPofileEditPopup,
  submitButtonAvatarUpdatePopup,
} from "../scripts/utils/constants.js";
import { Avatar } from "../scripts/components/Avatar";

let formList;
const formValidators = {};
let initialCards = [];
let cardsList;
const avatar = new Avatar(profileAvatar);
let userId;
let card;

//Api
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-39",
  headers: {
    authorization: "722dbccf-1b7d-4d02-92c2-c3e9bbf9e747",
    "Content-Type": "application/json",
  },
});

//Get user profile from server
api
  .getUserData()
  .then((result) => {
    userInfo.setUserInfo(result.name, result.about);
    avatar.setNewAvatar(result.avatar);
    userId = result._id;
  })
  .then(() => {
    //Get initial cards from server (waiting for user id)
    return api.getInitialCards();
  })
  .then((result) => {
    initialCards = result;
    cardsList = new Section(
      {
        items: initialCards,
        renderer: (item) => {
          createCard(item);
        },
      },
      ".cards"
    );
    //Add 6 default cards
    cardsList.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

function handleCardLike(like, cardId) {
  if (like) {
    api
      .addLike(cardId)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  } else {
    api
      .removeLike(cardId)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  }
}

function handleLoading(isLoading, button) {
  button.textContent = isLoading ? "Сохранение..." : "Сохранить";
}

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
  api
    .updateUserInfo(
      nameInput.value,
      descriptionInput.value,
      submitButtonPofileEditPopup,
      handleLoading
    )
    .then((result) => {
      userInfo.setUserInfo(result.name, result.about);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setTimeout(() => handleLoading(false, submitButtonPofileEditPopup), 500);
    });
  popupProfileEdit.close();
}

//Submit button click (add card)
function submitCard(item) {
  api
    .addNewCard(item.title, item.link, submitButtonAddCardPopup, handleLoading)
    .then((result) => {
      console.log(result);
      createCard(result);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupCardAdd.close();
      setTimeout(() => handleLoading(false, submitButtonAddCardPopup), 500);
    });
}

//Submit button click (avatar update)
function handleAvatarUpdateFormSubmit({ link }) {
  api
    .updateUserAvatar(link, submitButtonAvatarUpdatePopup, handleLoading)
    .then((result) => {
      avatar.setNewAvatar(result.avatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAvatarUpdate.close();
      setTimeout(
        () => handleLoading(false, submitButtonAvatarUpdatePopup),
        500
      );
    });
}

//Submit button click (deletion confirmation)
function handleDeletionConfirmationSubmit(cardId, evt) {
  api
    .deleteCard(cardId)
    .then(() => {
      card.removeCard(evt);
      popupDeletionConfirmation.close();
    })
    .catch((err) => {
      console.log(err);
    });
}

function handleTrashButtonClick(cardId, evt) {
  popupDeletionConfirmation.open(cardId, evt);
}

function handleCardClick(title, link) {
  photoViewPopup.open(title, link);
}

//Add new card
function createCard(data) {
  card = new Card(
    data,
    userId,
    cardTemplateSelector,
    handleCardClick,
    handleTrashButtonClick,
    handleCardLike
  );
  const cardElement = card.generateCard();
  cardsList.addItem(cardElement);
}

//Event listeners
profileEditButton.addEventListener("click", openPopupProfile);
addCardButton.addEventListener("click", openPopupAddCard);
profileAvatar.addEventListener("click", openPopupAvatarUpdate);
