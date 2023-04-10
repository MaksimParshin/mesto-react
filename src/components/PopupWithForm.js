import React from "react";

export default function PopupWithForm(props) {
  return (
    <>
      {/* общий попап */}
      <div className={`popup popup_name_${props.name} ${props.isOpend ? "popup_opend": ""}`}>
        <div className="popup__container popup__container_name_avatar">
          <button
            className="popup__close-button"
            type="button"
            aria-label="закрыть попап"
            onClick={props.onClose}
          ></button>
          <h2 className="popup__title">{props.title}</h2>
          <form
            className={`popup__form popup__form_name_${props.name}`}
            method="post"
            name="form-popup"
            noValidate
          >
            {props.children}

            <button
              type="submit"
              className="popup__submit-button popup__submit-button_state_save"
              aria-label="создать аватар"
            >
              {props.buttonText}
            </button>
          </form>
        </div>
      </div>



      {/* <!-- попап удаления карточки --> */}
      {/* <div className="popup popup_name_card-delet">
        <div className="popup__container popup__container_name_card-delet">
          <button
            className="popup__close-button"
            type="button"
            aria-label="закрыть попап"
          ></button>
          <h2 className="popup__title popup__title_name_card-delet">
            Вы уверены?
          </h2>

          <button
            type="submit"
            className="popup__submit-button popup__submit-button_state_save"
            aria-label="удалить карточку"
          >
            Да
          </button>
        </div>
      </div> */}
    </>
  );
}
