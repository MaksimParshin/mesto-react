import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
// import {CardsContext} from '../contexts/CardsContext'
import { API } from "../utils/Api";

export default function Main(props) {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    API.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const currentUser = React.useContext(CurrentUserContext);
  // const cards = React.useContext(CardsContext);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    
    if (isLiked) {
      API.deleteLike(card._id).then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      });
    } else {
      API.putLike(card._id).then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      });
    }
  }

  function handleCardDelete(card) {
    API.deleteCard(card._id).then((data)=> {
      console.log(data)
      setCards((state) =>

      state.filter((c) => (c._id !== card._id))
    );
    });
  }
  const elements = cards.map((card) => (
    <Card
      key={card._id}
      card={card}
      onCardClick={props.onCardClick}
      onCardLike={handleCardLike}
      onCardDelete={handleCardDelete}
    />
  ));

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <button
            className="profile__avatar-button"
            type="button"
            onClick={props.onEditAvatar}
          >
            <img
              className="profile__avatar-img"
              src={currentUser.avatar}
              alt="аватар"
            ></img>
            <div className="profile__avatar"></div>
          </button>

          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="редактировать профиль"
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__profession">{currentUser.about}</p>
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
        <div className="elements__list">{elements}</div>
      </section>
    </main>
  );
}
