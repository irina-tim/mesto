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
export const deletionConfirmationPopupSelector = ".popup-deletion-confirmation";
export const cardTemplateSelector = ".card-template";
export const submitButtonAddCardPopup = document
  .querySelector(addCardPopupSelector)
  .querySelector(".popup__submit-button");
export const submitButtonPofileEditPopup = document
  .querySelector(profileEditPopupSelector)
  .querySelector(".popup__submit-button");
export const submitButtonAvatarUpdatePopup = document
  .querySelector(avatarUpdatePopupSelector)
  .querySelector(".popup__submit-button");
