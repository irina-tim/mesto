const popupProfile = document.querySelector(".popup-profile-edit");
const popupAddCard = document.querySelector(".popup-add-card");
const profileEditButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const popupAddCardCloseButton = document.querySelector(
  ".popup-add-card .popup__close"
);
const popupProfileCloseButton = document.querySelector(
  ".popup-profile-edit .popup__close"
);
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
const formProfileEdit = document.querySelector(
  ".popup-profile-edit .popup__container"
);
const formAddCard = document.querySelector(".popup-add-card .popup__container");
const cardLikeButtonsList = document.querySelectorAll(".card__like-button");
const cardTrashButtonsList = document.querySelectorAll(".card__trash-button");
const cardTemplate = document.querySelector("template");
const sectionWithCards = document.querySelector(".cards");
const initialCards = [
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

//Open popup (profile edit)
function openPopupProfile() {
  popupProfile.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

profileEditButton.addEventListener("click", openPopupProfile);

//Open popup (card add)
function openPopupAddCard() {
  popupAddCard.classList.add("popup_opened");
}

addCardButton.addEventListener("click", openPopupAddCard);

//Popups close
function closePopup(evt) {
  evt.target.parentElement.parentElement.classList.remove("popup_opened");
}

function closePopupClickOutside(popup) {
  popup.addEventListener("click", (event) => {
    event.target === event.currentTarget &&
      event.target.classList.remove("popup_opened");
  });
}

popupProfileCloseButton.addEventListener("click", closePopup);
popupAddCardCloseButton.addEventListener("click", closePopup);
closePopupClickOutside(popupProfile);
closePopupClickOutside(popupAddCard);

//Submit button click (profile edit)
function formSubmitHandlerProfileEdit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup(evt);
}

formProfileEdit.addEventListener("submit", formSubmitHandlerProfileEdit);

//Add new card
function addCard(link, title) {
  const newCard = cardTemplate.content.querySelector(".card").cloneNode(true);
  const newCardImage = newCard.querySelector(".card__image");
  const newCardTitle = newCard.querySelector(".card__title");
  newCardImage.alt = title || "Картинка отсутствует";
  newCardTitle.textContent = title || "Без названия";

  //Image validation (only valid images 100px+ x 100px+ allowed)
  const img = new Image();
  let imgWidth;
  let imgHeight;
  img.src = link;
  newCardImage.src = "./images/no-image.jpg";
  img.onload = function () {
    imgWidth = this.width;
    imgHeight = this.height;
    newCardImage.src =
      imgWidth < 100 || imgHeight < 100 ? "./images/no-image.jpg" : link;
  };

  sectionWithCards.prepend(newCard);
  likeClickListener(newCard.querySelector(".card__like-button"));
  trashClickListener(newCard.querySelector(".card__trash-button"));
}

//Submit button click (add card)
formAddCard.addEventListener("submit", (event) => {
  event.preventDefault();
  addCard(cardImageLinkInput.value, cardTitleInput.value);
  closePopup(event);
  cardTitleInput.value = "";
  cardImageLinkInput.value = "";
});

//Like button click
function likeClickListener(el) {
  el.addEventListener("click", () => {
    el.classList.toggle("card__like-button_active");
  });
}

cardLikeButtonsList.forEach((element) => {
  likeClickListener(element);
});

//Trash button click: delete card
function trashClickListener(el) {
  el.addEventListener("click", (event) => {
    el.parentElement.remove();
  });
}

cardTrashButtonsList.forEach((element) => {
  trashClickListener(element);
});

//Add 6 default cards
initialCards.forEach((card) => {
  addCard(card.link, card.name);
});
