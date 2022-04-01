import { Popup } from "./Popup.js";
import { inputData } from "../utils/constants.js";
export { PopupWithConfirmation };

class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._popupForm = this._popup.querySelector(inputData.formSelector);
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._cardId, this._event);
    });
  }

  open(cardId, evt) {
    super.open();
    this._cardId = cardId;
    this._event = evt;
  }
}
