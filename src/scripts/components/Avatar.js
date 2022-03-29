const noImage = require("../../images/no-image.jpg");
export { Avatar };

class Avatar {
  constructor(profileAvatar) {
    this._profileAvatar = profileAvatar;
  }

  setNewAvatar(link) {
    this._profileAvatar.style.backgroundImage = "url('" + link + "')";
  }
}
