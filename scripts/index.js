let popup = document.querySelector('.popup');
let profileEditButton = document.querySelector('.profile__edit-button'); 
let popupCloseButton = document.querySelector('.popup__close');
let nameInput = document.querySelector('.popup__input-name');
let descriptionInput = document.querySelector('.popup__input-description');
let profileName = document.querySelector('.profile__title');
let profileDescription = document.querySelector('.profile__subtitle')

profileEditButton.addEventListener('click', () => {
  popup.classList.add('popup_opened');
  nameInput.setAttribute('value', profileName.textContent);
  descriptionInput.setAttribute('value', profileDescription.textContent);
})

function closePopup() {
  popup.classList.remove('popup_opened');
}

popupCloseButton.addEventListener('click', closePopup);

popup.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    closePopup();
  }
})
