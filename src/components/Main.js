import React from "react";

export default function Main() {
  return (
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
  );
}
