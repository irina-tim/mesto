const noImage = require("../../images/no-image.jpg");

export { Card };

class Card {
  constructor(
    link,
    title,
    cardSelector,
    handleCardClick,
    handleTrashButtonClick
  ) {
    this._title = title;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleTrashButtonClick = handleTrashButtonClick;
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

  removeCard(evt) {
    evt.target.closest(".card").remove();
  }

  setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", this._clickLike);
    this._element
      .querySelector(".card__trash-button")
      .addEventListener(
        "click",
        this._handleTrashButtonClick /*this.removeCard*/
      );
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
    this._cardImage = this._element.querySelector(".card__image");
    this._cardImage.src = this._link;
    this._setValidImage();
    this._cardImage.alt = this._title || "Картинка отсутствует";
    this._element.querySelector(".card__title").textContent =
      this._title || "Без названия";
    this.setEventListeners();
    return this._element;
  }
}
