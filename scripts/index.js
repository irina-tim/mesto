let popup = document.querySelector(".popup");
let profileEditButton = document.querySelector(".profile__edit-button");
let popupCloseButton = document.querySelector(".popup__close");
let nameInput = document.querySelector(".popup__input_type_name");
let descriptionInput = document.querySelector(".popup__input_type_description");
let profileName = document.querySelector(".profile__title");
let profileDescription = document.querySelector(".profile__subtitle");
let formElement = document.querySelector(".popup__container");

function openPopup() {
  popup.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

profileEditButton.addEventListener("click", openPopup);

function closePopup() {
  popup.classList.remove("popup_opened");
}

popupCloseButton.addEventListener("click", closePopup);

popup.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    closePopup();
  }
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup();
}

formElement.addEventListener("submit", formSubmitHandler);
