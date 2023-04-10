import React from "react";

export default function ImagePopup() {
  return (
    <div className="popup popup_name_img">
      <div className="popup__container popup__container_name_img">
        <button
          className="popup__close-button"
          type="button"
          aria-label="закрыть попап"
        ></button>
        <img className="popup__img" src="#" alt="" />
        <p className="popup__img-title"></p>
      </div>
    </div>
  );
}
