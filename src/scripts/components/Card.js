const noImage = require("../../images/no-image.jpg");

export { Card };

class Card {
  constructor(
    data,
    userId,
    cardSelector,
    handleCardClick,
    handleTrashButtonClick,
    handleCardLike
  ) {
    this._title = data.name;
    this._link = data.link;
    this._userId = userId;
    this._likes = data.likes;
    this._id = data._id;
    this._cardOwnerId = data.owner._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleTrashButtonClick = handleTrashButtonClick;
    this._handleCardLike = handleCardLike;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  _addLike(card) {
    card.classList.add("card__like-button_active");
  }

  _clickLike(evt) {
    this._likeCounter = evt.target
      .closest(".card")
      .querySelector(".card__like-counter");
    evt.target.classList.toggle("card__like-button_active");
    this._like = evt.target.classList.contains("card__like-button_active");
    this._likeCounter.textContent = this._like
      ? +this._likeCounter.textContent + 1
      : this._likeCounter.textContent - 1;
    this._handleCardLike(this._like, evt.target.closest(".card").id);
  }

  removeCard(evt) {
    evt.target.closest(".card").remove();
  }

  setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", (evt) => this._clickLike(evt));
    this._element
      .querySelector(".card__trash-button")
      .addEventListener("click", (evt) =>
        this._handleTrashButtonClick(this._id, evt)
      ); /*this.removeCard*/
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._title, this._link);
    });
  }

  _setValidImage() {
    const img = new Image();
    img.src = this._link;
    img.onerror = () => {
      this._cardImage.src = noImage;
      this._link = noImage;
    };
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardLikes = this._element.querySelector(".card__like-counter");
    this._cardImage = this._element.querySelector(".card__image");
    this._cardImage.src = this._link;
    this._setValidImage();
    this._cardImage.alt = this._title || "Картинка отсутствует";
    this._element.querySelector(".card__title").textContent =
      this._title || "Без названия";
    this._cardLikes.textContent = this._likes.length;
    this.setEventListeners();
    this._element.id = this._id;
    if (this._likes.some((el) => el._id === this._userId)) {
      this._addLike(this._element.querySelector(".card__like-button"));
    }
    if (this._cardOwnerId != this._userId) {
      this._element.querySelector(".card__trash-button").style.display = "none";
    }
    return this._element;
  }
}
