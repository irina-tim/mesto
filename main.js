(()=>{"use strict";var t={94:(t,e,n)=>{t.exports=n.p+"3d65c30c93d46903fa83.jpg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.p="",(()=>{function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var e=n(94),r=function(){function n(t,e,r,o,i,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._title=t.name,this._link=t.link,this._userId=e,this._likes=t.likes,this._id=t._id,this._cardOwnerId=t.owner._id,this._cardSelector=r,this._handleCardClick=o,this._handleTrashButtonClick=i,this._handleCardLike=a}var r,o;return r=n,o=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_addLike",value:function(t){t.classList.add("card__like-button_active")}},{key:"_clickLike",value:function(t){this._likeCounter=t.target.closest(".card").querySelector(".card__like-counter"),t.target.classList.toggle("card__like-button_active"),this._like=t.target.classList.contains("card__like-button_active"),this._likeCounter.textContent=this._like?+this._likeCounter.textContent+1:this._likeCounter.textContent-1,this._handleCardLike(this._like,t.target.closest(".card").id)}},{key:"removeCard",value:function(t){t.target.closest(".card").remove()}},{key:"setEventListeners",value:function(){var t=this;this._element.querySelector(".card__like-button").addEventListener("click",(function(e){return t._clickLike(e)})),this._element.querySelector(".card__trash-button").addEventListener("click",(function(e){return t._handleTrashButtonClick(t._id,e)})),this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._title,t._link)}))}},{key:"_setValidImage",value:function(){var t=this,n=new Image;n.src=this._link,n.onerror=function(){t._cardImage.src=e,t._link=e}}},{key:"generateCard",value:function(){var t=this;return this._element=this._getTemplate(),this._cardLikes=this._element.querySelector(".card__like-counter"),this._cardImage=this._element.querySelector(".card__image"),this._cardImage.src=this._link,this._setValidImage(),this._cardImage.alt=this._title||"Картинка отсутствует",this._element.querySelector(".card__title").textContent=this._title||"Без названия",this._cardLikes.textContent=this._likes.length,this.setEventListeners(),this._element.id=this._id,this._likes.some((function(e){return e._id===t._userId}))&&this._addLike(this._element.querySelector(".card__like-button")),this._cardOwnerId!=this._userId&&(this._element.querySelector(".card__trash-button").style.display="none"),this._element}}],o&&t(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputData=e,this._formElement=n,this._submitButton=this._formElement.querySelector(this._inputData.submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputData.inputSelector))}var e,n;return e=t,(n=[{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._toggleButtonState()}))}))}},{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_showInputError",value:function(t,e){this._errorElement=this._formElement.querySelector(".".concat(t.id,"-error")),t.classList.add(this._inputData.inputErrorClass),this._errorElement.textContent=e,this._errorElement.classList.add(this._inputData.errorClass)}},{key:"_hideInputError",value:function(t){this._errorElement=this._formElement.querySelector(".".concat(t.id,"-error")),t.classList.remove(this._inputData.inputErrorClass),this._errorElement.classList.remove(this._inputData.errorClass),this._errorElement.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():this._enableSubmitButton()}},{key:"_enableSubmitButton",value:function(){this._submitButton.classList.remove(this._inputData.inactiveButtonClass),this._submitButton.removeAttribute("disabled")}},{key:"disableSubmitButton",value:function(){this._submitButton.classList.add(this._inputData.inactiveButtonClass),this._submitButton.setAttribute("disabled",!0)}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}},{key:"resetValidation",value:function(){var t=this;this._formElement.reset(),this.disableSubmitButton(),this._inputList.forEach((function(e){t._hideInputError(e)}))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._initialArray=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(){var t=this;this._initialArray.reverse().forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),c={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"},s=document.querySelector(".profile__avatar"),l=document.querySelector(".profile__edit-button"),f=document.querySelector(".profile__add-button"),p=document.querySelector(".popup__input_type_name"),h=document.querySelector(".popup__input_type_description"),d="popup_opened";function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var _=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add(d),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove(d),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains(d)||e.target.classList.contains("popup__close"))&&t.close(t._popup)}))}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=k(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},m.apply(this,arguments)}function k(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}function g(t,e){return g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},g(t,e)}function w(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(r);if(o){var n=E(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return w(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._imagePopupPicture=document.querySelector(".popup-photo-view__image"),e._imageCaption=document.querySelector(".popup-photo-view__title"),e}return e=a,(n=[{key:"open",value:function(t,e){this._imagePopupPicture.src=e,this._imagePopupPicture.alt=t,this._imageCaption.textContent=t,m(E(a.prototype),"open",this).call(this)}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(_);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=P(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},C.apply(this,arguments)}function P(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}function L(t,e){return L=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},L(t,e)}function I(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},q(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(r);if(o){var n=q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return I(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._handleSubmit=e,n._popupForm=n._popup.querySelector(c.formSelector),n._inputs=Array.from(n._popupForm.querySelectorAll(c.inputSelector)),n}return e=a,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputs.forEach((function(e){return t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;C(q(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit(t._getInputValues())}))}},{key:"close",value:function(){C(q(a.prototype),"close",this).call(this),this._popupForm.reset()}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(_);function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var B=function(){function t(e){var n=e.nameSelector,r=e.descriptionSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._description=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,description:this._description.textContent}}},{key:"setUserInfo",value:function(t,e){this._name.textContent=t,this._description.textContent=e}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=A(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},U.apply(this,arguments)}function A(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=F(t)););return t}function V(t,e){return V=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},V(t,e)}function N(t,e){if(e&&("object"===x(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function F(t){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},F(t)}var J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&V(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=F(r);if(o){var n=F(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return N(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._handleSubmit=e,n._popupForm=n._popup.querySelector(c.formSelector),n}return e=a,(n=[{key:"setEventListeners",value:function(){var t=this;U(F(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit(t._cardId,t._event)}))}},{key:"open",value:function(t,e){U(F(a.prototype),"open",this).call(this),this._cardId=t,this._event=e}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(_);function H(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var z=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._options=e}var e,n;return e=t,(n=[{key:"getInitialCards",value:function(){return fetch(this._options.baseUrl+"/cards",{headers:this._options.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка загрузки первоначальных карточек: ".concat(t.status))}))}},{key:"getUserData",value:function(){return fetch(this._options.baseUrl+"/users/me",{headers:this._options.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка загрузки информации о пользователе: ".concat(t.status))}))}},{key:"updateUserInfo",value:function(t,e){return fetch(this._options.baseUrl+"/users/me",{method:"PATCH",headers:this._options.headers,body:JSON.stringify({name:t,about:e})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка отправки информации о пользователе: ".concat(t.status))}))}},{key:"updateUserAvatar",value:function(t){return fetch(this._options.baseUrl+"/users/me/avatar",{method:"PATCH",headers:this._options.headers,body:JSON.stringify({avatar:t})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка загрузки аватара пользователя: ".concat(t.status))}))}},{key:"addLike",value:function(t){return fetch(this._options.baseUrl+"/cards/"+t+"/likes",{method:"PUT",headers:this._options.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка постановки лайка: ".concat(t.status))}))}},{key:"removeLike",value:function(t){return fetch(this._options.baseUrl+"/cards/"+t+"/likes",{method:"DELETE",headers:this._options.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка удаления лайка: ".concat(t.status))}))}},{key:"addNewCard",value:function(t,e){return fetch(this._options.baseUrl+"/cards",{method:"POST",headers:this._options.headers,body:JSON.stringify({name:t,link:e})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка добавления карточки: ".concat(t.status))}))}},{key:"deleteCard",value:function(t){return fetch(this._options.baseUrl+"/cards/"+t,{method:"DELETE",headers:this._options.headers}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка удаления карточки: ".concat(t.status))}))}}])&&H(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n(94);var G,K,Q,W=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileAvatar=e}var e,n;return e=t,(n=[{key:"setNewAvatar",value:function(t){this._profileAvatar.style.backgroundImage="url('"+t+"')"}}])&&M(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),X={},Y=new W(s),Z=new z({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39",headers:{authorization:"722dbccf-1b7d-4d02-92c2-c3e9bbf9e747","Content-Type":"application/json"}});function $(t,e){t?Z.addLike(e).then((function(){})).catch((function(t){console.log(t)})):Z.removeLike(e).then((function(){})).catch((function(t){console.log(t)}))}Z.getUserData().then((function(t){tt.setUserInfo(t.name,t.about),Y.setNewAvatar(t.avatar),K=t._id})).then((function(){return Z.getInitialCards()})).then((function(t){(G=new u({items:t,renderer:function(t){ct(t)}},".cards")).renderItems()})).catch((function(t){console.log(t)}));var tt=new B({nameSelector:".profile__title",descriptionSelector:".profile__subtitle"}),et=new S(".popup-photo-view");et.setEventListeners();var nt=new J(".popup-deletion-confirmation",(function(t,e){Z.deleteCard(t).then((function(t){Y.setNewAvatar(t.avatar),Q.removeCard(e),nt.close()})).catch((function(t){console.log(t)}))}));nt.setEventListeners();var rt=new R(".popup-add-card",(function(t){Z.addNewCard(t.title,t.link).then((function(t){console.log(t),ct(t),rt.close()})).catch((function(t){console.log(t)}))}));rt.setEventListeners();var ot=new R(".popup-profile-edit",(function(){Z.updateUserInfo(p.value,h.value).then((function(t){tt.setUserInfo(t.name,t.about)})).catch((function(t){console.log(t)})),ot.close()}));ot.setEventListeners();var it=new R(".popup-avatar-update",(function(t){var e=t.link;Z.updateUserAvatar(e).then((function(t){Y.setNewAvatar(t.avatar)})).catch((function(t){console.log(t)})).finally((function(){it.close()}))}));function at(t,e){nt.open(t,e)}function ut(t,e){et.open(t,e)}function ct(t){var e=(Q=new r(t,K,".card-template",ut,at,$)).generateCard();G.addItem(e)}it.setEventListeners(),function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){var n=new i(t,e),r=e.getAttribute("name");X[r]=n,n.enableValidation()}))}(c),l.addEventListener("click",(function(){X.profileEdit.resetValidation(),ot.open();var t=tt.getUserInfo();p.value=t.name,h.value=t.description})),f.addEventListener("click",(function(){X.addCard.resetValidation(),rt.open()})),s.addEventListener("click",(function(){X.avatarUpdate.resetValidation(),it.open()}))})()})();