import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {

    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <ImagePopup />
      <PopupWithForm
        name="avata"
        title="Обновить аватар"
        buttonText={"Сохранить"}
        isOpend={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
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
          </>
        }
      />
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpend={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText={"Сохранить"}
        children={
          <>
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
          </>
        }
      />
      <PopupWithForm
        name="element"
        title="Новое место"
        isOpend={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText={"Создать"}
        children={
          <>
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
          </>
        }
      />
       <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
