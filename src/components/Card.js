import React from "react";


export default function Card({card, onCardClick}) {
 
    function handleClick() {

        onCardClick(card);
      }  
  
    return (
    <div className="element">
      <button
        className="element__recicle-bin"
        type="button"
        aria-label="удалить карточку"
      ></button>
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick}/>
      <div className="element__container">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-container">
          <button
            className="element__like-button"
            type="button"
            aria-label="лайк"
          ></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}
