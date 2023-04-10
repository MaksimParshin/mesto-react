import React from "react";
import Logo from "./images/logo.svg";

function App() {
  return (
    <div className="page">
      <header className="header">
        <img className="header__logo" src={Logo} alt="Логотип место" />
      </header>
      <main className="main">
        <section className="profile">
          <div className="profile__container">
            <button className="profile__avatar-button" type="button">
              <img className="profile__avatar" src="#" alt="аватар" />
            </button>

            <div className="profile__info">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button
                className="profile__edit-button"
                type="button"
                aria-label="редактировать профиль"
              ></button>
              <p className="profile__profession">исследователь океана</p>
            </div>
          </div>
          <button
            className="profile__add-button"
            type="button"
            aria-label="добавить карточку"
          ></button>
        </section>
        <section className="elements">
          <div className="elements__list"></div>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">&copy; 2023 Mesto Russia</p>
      </footer>

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
      {/* <!-- попап картинки --> */}
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

      {/* <!-- шаблон карточки --> */}
      <template className="element-template">
        <div className="element">
          <button className="element__recicle-bin" type="button" aria-label="удалить карточку"></button>
          <img className="element__image" src="#" alt="" />
          <div className="element__container">
            <h2 className="element__title"></h2>
            <div className="element__like-container">
              <button className="element__like-button" type="button" aria-label="лайк"></button>
              <p className="element__like-counter">0</p>
            </div>
          </div>
        </div>
      </template>
    </div>
  );
}

export default App;
