import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpend, onClose, onUpdateAvatar }) {
  const inputAvatarRef = React.useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputAvatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText={"Сохранить"}
      isOpend={isOpend}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input
          ref={inputAvatarRef}
          className="popup__input popup__input_value_avatar"
          type="url"
          placeholder="Введите ссылку"
          name="avatar"
          required
        />
        <span className="popup__error avatar-error"></span>
      </label>
    </PopupWithForm>
  );
}
