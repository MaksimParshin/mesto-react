import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";


function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <ImagePopup/>

      
      

     

      {/* <!-- шаблон карточки --> */}
      <template className="element-template">
        <div className="element">
          <button
            className="element__recicle-bin"
            type="button"
            aria-label="удалить карточку"
          ></button>
          <img className="element__image" src="#" alt="" />
          <div className="element__container">
            <h2 className="element__title"></h2>
            <div className="element__like-container">
              <button
                className="element__like-button"
                type="button"
                aria-label="лайк"
              ></button>
              <p className="element__like-counter">0</p>
            </div>
          </div>
        </div>
      </template>
    </div>
  );
}

export default App;
