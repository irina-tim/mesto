const popup = document.querySelector(".popup");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupCloseButton = document.querySelector(".popup__close");
const nameInput = document.querySelector(".popup__input_type_name");
const descriptionInput = document.querySelector(
  ".popup__input_type_description"
);
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__subtitle");
const formElement = document.querySelector(".popup__container");
const cardLikeButtonsList = document.querySelectorAll(".card__like-button");
const cardTrashButtonsList = document.querySelectorAll(".card__trash-button");

//Popup open
function openPopup() {
  popup.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

profileEditButton.addEventListener("click", openPopup);

//Popup close
function closePopup() {
  popup.classList.remove("popup_opened");
}

popupCloseButton.addEventListener("click", closePopup);

popup.addEventListener("click", (event) => {
  event.target === event.currentTarget && closePopup();
});

//Submit button click
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup();
}

formElement.addEventListener("submit", formSubmitHandler);

//Like button click
cardLikeButtonsList.forEach((element) => {
  element.addEventListener("click", (event) => {
    element.classList.toggle("card__like-button_active");
  });
});

//Trash button click: delete card
cardTrashButtonsList.forEach((element) => {
  element.addEventListener("click", () => {
    element.parentElement.remove();
  });
});
