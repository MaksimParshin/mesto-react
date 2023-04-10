import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function Main(props) {

    


  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <button
            className="profile__avatar-button"
            type="button"
            onClick={props.onEditAvatar}
          >
            <img className="profile__avatar" src="#" alt="аватар" />
          </button>

          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="редактировать профиль"
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__profession">исследователь океана</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="добавить карточку"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        <div className="elements__list"></div>
      </section>
      <PopupWithForm/>
    </main>
  );
}
