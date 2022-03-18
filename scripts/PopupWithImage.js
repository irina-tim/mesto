import { Popup } from "./Popup.js";

export { PopupWithImage };

class PopupWithImage extends Popup {
  open(title, link) {
    this._imagePopupPicture = document.querySelector(
      ".popup-photo-view__image"
    );
    this._imageCaption = document.querySelector(".popup-photo-view__title");
    this._imagePopupPicture.src = link;
    this._imagePopupPicture.alt = title;
    this._imageCaption.textContent = title;
    super.open();
  }
}
