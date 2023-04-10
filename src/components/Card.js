export default function Card(props) {
 
    function handleClick() {
        props.onCardClick(props.card);
      }  
  
    return (
    <div className="element">
      <button
        className="element__recicle-bin"
        type="button"
        aria-label="удалить карточку"
      ></button>
      <img className="element__image" src={props.card.link} alt="" onClick={handleClick}/>
      <div className="element__container">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button
            className="element__like-button"
            type="button"
            aria-label="лайк"
          ></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}
