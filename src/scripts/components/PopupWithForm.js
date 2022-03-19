import { Popup } from "./Popup.js";
import { inputData } from "../utils/constants.js";

export { PopupWithForm };

class PopupWithForm extends Popup {
  constructor(popupSelector, _handleSubmit) {
    super(popupSelector);
    this._handleSubmit = _handleSubmit;
    this._popupForm = this._popup.querySelector(inputData.formSelector);
  }

  _getInputValues() {
    const inputs = Array.from(
      this._popupForm.querySelectorAll(inputData.inputSelector)
    );
    const inputsObj = {};
    inputs.forEach((input) => (inputsObj[input.name] = input.value));
    return inputsObj;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) =>
      this._handleSubmit(evt, this._getInputValues())
    );
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}
