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
    buttonElement.classList.add(data.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(data.inactiveButtonClass);
  }
}

enableValidation(inputData);
