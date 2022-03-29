const noImage = require("../../images/no-image.jpg");
export { Avatar };

class Avatar {
  constructor(profileAvatar) {
    this._profileAvatar = profileAvatar;
  }

  _setValidImage(link) {
    const img = new Image();
    img.src = link;
    img.onerror = () => {
      this._profileAvatar.style.backgroundImage = "url('" + noImage + "')";
    };
  }

  setNewAvatar(link) {
    this._link = link;
    this._profileAvatar.style.backgroundImage = "url('" + this._link + "')";
    this._setValidImage(this._link);
  }
}
