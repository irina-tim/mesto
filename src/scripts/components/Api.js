export { Api };

class Api {
  constructor(options) {
    this._options = options;
  }

  getInitialCards() {
    return fetch(this._options.baseUrl + "/cards", {
      headers: this._options.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(
        `Ошибка загрузки первоначальных карточек: ${res.status}`
      );
    });
  }

  getUserData() {
    return fetch(this._options.baseUrl + "/users/me", {
      headers: this._options.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(
        `Ошибка загрузки информации о пользователе: ${res.status}`
      );
    });
  }

  updateUserInfo(userName, userAbout) {
    return fetch(this._options.baseUrl + "/users/me", {
      method: "PATCH",
      headers: this._options.headers,
      body: JSON.stringify({
        name: userName,
        about: userAbout,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(
        `Ошибка загрузки информации о пользователе: ${res.status}`
      );
    });
  }
}

// updateUserAvatar() {}
