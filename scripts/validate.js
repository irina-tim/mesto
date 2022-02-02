const inputData = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
};

function enableValidation(data) {
  const formList = Array.from(document.querySelectorAll(data.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, data);
  });
}

function setEventListeners(formElement, data) {
  const inputList = Array.from(
    formElement.querySelectorAll(data.inputSelector)
  );
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement, data);
      toggleButtonState(
        inputList,
        formElement.querySelector(data.submitButtonSelector),
        data
      );
    });
  });
}

function isValid(formElement, inputElement, data) {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      data
    );
  } else {
    hideInputError(formElement, inputElement, data);
  }
}

function showInputError(formElement, inputElement, errorMessage, data) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(data.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(data.errorClass);
}

function hideInputError(formElement, inputElement, data) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(data.inputErrorClass);
  errorElement.classList.remove(data.errorClass);
  errorElement.textContent = "";
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement, data) {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(buttonElement, data);
  } else {
    enableSubmitButton(buttonElement, data);
  }
}

function enableSubmitButton(buttonElement, data) {
  buttonElement.classList.remove(data.inactiveButtonClass);
  buttonElement.removeAttribute("disabled");
}

function disableSubmitButton(buttonElement, data) {
  buttonElement.classList.add(data.inactiveButtonClass);
  buttonElement.setAttribute("disabled", true);
}

function resetFields(popup, data) {
  const popupForm = popup.querySelector(data.formSelector);
  popupForm.reset();
  const inputList = Array.from(popupForm.querySelectorAll(data.inputSelector));
  inputList.forEach((inputElement) => {
    hideInputError(popupForm, inputElement, data);
  });
}

function toggleSubmitButton(popup, data) {
  const formElement = popup.querySelector(data.formSelector);
  const inputList = Array.from(
    formElement.querySelectorAll(data.inputSelector)
  );
  const buttonElement = formElement.querySelector(data.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, data);
}

enableValidation(inputData);
