import React from "react";
import { API } from "../utils/Api";
import Card from "./Card";
import {CurrentUserContext} from '../contexts/CurrentUserContext'


export default function Main(props) {
  // const [userName, setUserName] = React.useState("");
  // const [userDescription, setUserDescription] = React.useState("");
  // const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext)

  // React.useEffect(() => {
  //   API.getUserInfo()
  //     .then((data) => {
  //       setUserName(data.name);
  //       setUserDescription(data.about);
  //       setUserAvatar(data.avatar);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  React.useEffect(() => {
    API.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const elements = cards.map(card=>(<Card key={card._id} card={card} onCardClick={props.onCardClick}/>))

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
        <div className="elements__list">
            {elements}
        </div>
      </section>
     
    </main>
  );
}
