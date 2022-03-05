export { inputData, FormValidator };

const inputData = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
};

class FormValidator {
  constructor(inputData, formElement) {
    this._inputData = inputData;
    this._formElement = formElement;
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputData.inputSelector)
    );
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this._toggleButtonState(
          this._inputList,
          this._formElement.querySelector(this._inputData.submitButtonSelector)
        );
      });
    });
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement, errorMessage) {
    this._errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputData.inputErrorClass);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._inputData.errorClass);
  }

  _hideInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputData.inputErrorClass);
    this._errorElement.classList.remove(this._inputData.errorClass);
    this._errorElement.textContent = "";
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      this.disableSubmitButton(buttonElement);
    } else {
      this._enableSubmitButton(buttonElement);
    }
  }

  _enableSubmitButton(buttonElement) {
    buttonElement.classList.remove(this._inputData.inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  }

  disableSubmitButton(buttonElement) {
    buttonElement.classList.add(this._inputData.inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  }

  resetFields(popup) {
    this._popupForm = popup.querySelector(this._inputData.formSelector);
    this._popupForm.reset();
    this._inputList = Array.from(
      this._popupForm.querySelectorAll(this._inputData.inputSelector)
    );
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  toggleSubmitButton(popup) {
    this._formElement = popup.querySelector(this._inputData.formSelector);
    const inputList = Array.from(
      this._formElement.querySelectorAll(this._inputData.inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._inputData.submitButtonSelector
    );
    this._toggleButtonState(inputList, this._buttonElement);
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

const formList = Array.from(document.querySelectorAll(inputData.formSelector));
formList.forEach((formElement) => {
  const formValidator = new FormValidator(inputData, formElement);
  formValidator.enableValidation();
});
