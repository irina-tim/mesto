export { initialCards, Card };
import { photoViewPopup, openPopup } from "./index.js";

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

class Card {
  constructor(link, title, cardSelector) {
    this._title = title;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  _clickLike(evt) {
    evt.target.classList.toggle("card__like-button_active");
  }

  _removeCard(evt) {
    evt.target.parentElement.remove();
  }

  _clickImage(evt) {
    openPopup(photoViewPopup);
    document.querySelector(".popup-photo-view__image").src = evt.target.src;
    document.querySelector(".popup-photo-view__title").textContent =
      evt.target.parentElement.querySelector(".card__title").textContent;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", this._clickLike);
    this._element
      .querySelector(".card__trash-button")
      .addEventListener("click", this._removeCard);
    this._cardImage.addEventListener("click", this._clickImage);
  }

  _setValidImage() {
    const img = new Image();
    img.src = this._link;
    img.onerror = () => {
      this._cardImage.src = "./images/no-image.jpg";
    };
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".card__image");
    this._cardImage.src = this._link;
    this._setValidImage();
    this._cardImage.alt = this._title || "Картинка отсутствует";
    this._element.querySelector(".card__title").textContent =
      this._title || "Без названия";
    this._setEventListeners();
    return this._element;
  }
}
