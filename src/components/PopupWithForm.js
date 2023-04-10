import React from "react";

export default function PopupWithForm() {
  return (
    <>
      {/* <!-- попап редактирования аватара --> */}
      <div className="popup popup_name_avatar">
        <div className="popup__container popup__container_name_avatar">
          <button
            className="popup__close-button"
            type="button"
            aria-label="закрыть попап"
          ></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form
            className="popup__form popup__form_name_avatar"
            method="post"
            name="form-popup"
            noValidate
          >
            <label className="popup__label">
              <input
                className="popup__input popup__input_value_avatar"
                type="url"
                placeholder="Введите ссылку"
                name="avatar"
                required
              />
              <span className="popup__error avatar-error"></span>
            </label>

            <button
              type="submit"
              className="popup__submit-button popup__submit-button_state_save"
              aria-label="создать аватар"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>

      {/* <!-- попап редактирования профиля --> */}
      <div className="popup popup_name_profile">
        <div className="popup__container">
          <button
            className="popup__close-button"
            type="button"
            aria-label="закрыть попап"
          ></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form
            className="popup__form popup__form_name_profile"
            method="post"
            name="form-popup"
            noValidate
          >
            <label className="popup__label">
              <input
                className="popup__input popup__input_value_username"
                type="text"
                placeholder="Введите имя"
                name="name"
                required
                minLength="2"
                maxLength="40"
              />
              <span className="popup__error name-error"></span>
            </label>
            <label className="popup__label">
              <input
                className="popup__input popup__input_value_profession"
                type="text"
                placeholder="Введите профессию"
                name="about"
                required
                minLength="2"
                maxLength="200"
              />
              <span className="popup__error about-error"></span>
            </label>
            <button
              type="submit"
              className="popup__submit-button popup__submit-button_state_save"
              aria-label="создать профиль"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      {/* <!-- попап создания карточки --> */}
      <div className="popup popup_name_element">
        <div className="popup__container">
          <button
            className="popup__close-button"
            type="button"
            aria-label="закрыть попап"
          ></button>
          <h2 className="popup__title">Новое место</h2>
          <form
            className="popup__form popup__form_name_element"
            method="post"
            name="form-popup"
            noValidate
          >
            <label className="popup__label">
              <input
                className="popup__input popup__input_value_place"
                type="text"
                placeholder="Название"
                name="name"
                required
                minLength="2"
                maxLength="30"
              />
              <span className="popup__error name-error"></span>
            </label>
            <label className="popup__label">
              <input
                className="popup__input popup__input_value_url"
                type="url"
                placeholder="Ссылка на картинку"
                name="link"
                required
              />
              <span className="popup__error link-error"></span>
            </label>
            <button
              type="submit"
              className="popup__submit-button popup__submit-button_state_save"
              aria-label="создать карточку"
            >
              Создать
            </button>
          </form>
        </div>
      </div>

      {/* <!-- попап удаления карточки --> */}
      <div className="popup popup_name_card-delet">
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
      </div>
    </>
  );
}
