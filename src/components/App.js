import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CardsContext } from "../contexts/CardsContext";
import { API } from "../utils/Api";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    API.getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    elem: {},
  });

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
    setSelectedCard({ isOpen: false, elem: {} });
  }

  function handleCardClick(card) {
    setSelectedCard({ ...selectedCard, isOpen: true, elem: card });
  }

  function handleUpdateUser(data) {
    API.setUserInfo(data).then((data) => setCurrentUser(data));
    closeAllPopups();
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        {/* <CardsContext.Provider value={cards}> */}
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          buttonText={"Сохранить"}
          isOpend={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
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
        </PopupWithForm>
        <EditProfilePopup
          isOpend={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <PopupWithForm
          name="element"
          title="Новое место"
          isOpend={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText={"Создать"}
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
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        {/* </CardsContext.Provider> */}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
