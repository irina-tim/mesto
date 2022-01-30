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
const cardLikeButtonsList = document.querySelectorAll(".card__like-button");
const cardTrashButtonsList = document.querySelectorAll(".card__trash-button");
const cardTemplate = document.querySelector(".card-template");
const sectionWithCards = document.querySelector(".cards");
const photoViewPopup = document.querySelector(".popup-photo-view");
const photoViewCloseButton = document.querySelector(
  ".popup-photo-view__close-button"
);

//Open popup
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

//Open popup (profile edit)
function openPopupProfile() {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

//Open popup (card add)
function openPopupAddCard() {
  openPopup(popupAddCard);
}

//Popups close
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function popupClose(evt) {
  evt.target === evt.currentTarget &&
    evt.target.classList.remove("popup_opened");
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

//Submit button click (profile edit)
function formSubmitHandlerProfileEdit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup(popupProfile);
}

//Add new card
function addCard(link, title) {
  const newCard = cardTemplate.content.querySelector(".card").cloneNode(true);
  const newCardImage = newCard.querySelector(".card__image");
  const newCardTitle = newCard.querySelector(".card__title");
  newCardImage.alt = title || "Картинка отсутствует";
  newCardTitle.textContent = title || "Без названия";
  newCardImage.src = link;

  //Image validation
  const img = new Image();
  img.src = link;
  img.onerror = () => {
    newCardImage.src = "./images/no-image.jpg";
  };

  newCard
    .querySelector(".card__like-button")
    .addEventListener("click", clickLike);
  newCard
    .querySelector(".card__trash-button")
    .addEventListener("click", removeCard);
  newCardImage.addEventListener("click", сlickImage);
  sectionWithCards.prepend(newCard);
}

//Submit button click (add card)
function submitCard(evt) {
  evt.preventDefault();
  addCard(cardImageLinkInput.value, cardTitleInput.value);
  closePopup(popupAddCard);
  cardTitleInput.value = "";
  cardImageLinkInput.value = "";
}

//Like button click
function clickLike(evt) {
  evt.target.classList.toggle("card__like-button_active");
}

//Trash button click: delete card
function removeCard(evt) {
  evt.target.parentElement.remove();
}

//Card image click
function сlickImage(evt) {
  openPopup(photoViewPopup);
  document.querySelector(".popup-photo-view__image").src = evt.target.src;
  document.querySelector(".popup-photo-view__title").textContent =
    evt.target.parentElement.querySelector(".card__title").textContent;
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
