import { Popup } from "./Popup.js";
import {
  photoViewPopupImageSelector,
  photoViewPopupCaptionSelector,
} from "../utils/constants.js";

export { PopupWithImage };

class PopupWithImage extends Popup {
  open(title, link) {
    this._imagePopupPicture = document.querySelector(
      photoViewPopupImageSelector
    );
    this._imageCaption = document.querySelector(photoViewPopupCaptionSelector);
    this._imagePopupPicture.src = link;
    this._imagePopupPicture.alt = title;
    this._imageCaption.textContent = title;
    super.open();
  }
}
