const noImage = require("../../images/no-image.jpg");
export { Avatar };

class Avatar {
  constructor(link, profileAvatar) {
    this._link = link;
    this._profileAvatar = profileAvatar;
  }

  _setValidImage() {
    const img = new Image();
    img.src = this._link;
    img.onerror = () => {
      this._profileAvatar.style.backgroundImage = "url('" + noImage + "')";
    };
  }

  setNewAvatar() {
    this._profileAvatar.style.backgroundImage = "url('" + this._link + "')";
    this._setValidImage();
  }
}
