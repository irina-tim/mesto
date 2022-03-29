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
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}
