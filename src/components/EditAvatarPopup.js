import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({isOpend, onClose, onUpdateAvatar}) {

const inputAvatarRef = React.useRef(null);


const [newAvatar, setAvatar] = React.useState('')

function handleChangeAvatar() {
    
    setAvatar(inputAvatarRef.current.value)
}

    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateAvatar({
          avatar: newAvatar
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
        onChange={handleChangeAvatar}
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
