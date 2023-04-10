import React from "react";

export default function Main() {

    
  function handleEditAvatarClick() {
    document.querySelector(".popup_name_avatar").classList.add("popup_opend");
  }

  function handleEditProfileClick() {
    document.querySelector(".popup_name_profile").classList.add("popup_opend");
  }

  function handleAddPlaceClick() {
    document.querySelector(".popup_name_element").classList.add("popup_opend");
  }

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <button
            className="profile__avatar-button"
            type="button"
            onClick={handleEditAvatarClick}
          >
            <img className="profile__avatar" src="#" alt="аватар" />
          </button>

          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="редактировать профиль"
              onClick={handleEditProfileClick}
            ></button>
            <p className="profile__profession">исследователь океана</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="добавить карточку"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="elements">
        <div className="elements__list"></div>
      </section>
    </main>
  );
}
