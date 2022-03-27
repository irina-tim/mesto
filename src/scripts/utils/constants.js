export const inputData = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
};
export const profileAvatar = document.querySelector(".profile__avatar");
export const profileEditButton = document.querySelector(
  ".profile__edit-button"
);
export const addCardButton = document.querySelector(".profile__add-button");
export const nameInput = document.querySelector(".popup__input_type_name");
export const descriptionInput = document.querySelector(
  ".popup__input_type_description"
);
export const openedPopupSelector = "popup_opened";
export const closePopupButtonSelector = "popup__close";
export const photoViewPopupImageSelector = ".popup-photo-view__image";
export const photoViewPopupCaptionSelector = ".popup-photo-view__title";
export const photoViewPopupSelector = ".popup-photo-view";
export const addCardPopupSelector = ".popup-add-card";
export const profileEditPopupSelector = ".popup-profile-edit";
export const avatarUpdatePopupSelector = ".popup-avatar-update";
export const cardTemplateSelector = ".card-template";
export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
