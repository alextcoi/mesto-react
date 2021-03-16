import deletePic from '../images/delete__button.png';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import React from 'react';

function Card ({card, onCardClick, onCardLike, onCardDelete}) {

    const userData = React.useContext(CurrentUserContext);//подписываемся на контекст с данными пользователя
    const isOwn = card.owner._id === userData._id;
    const cardDeleteButtonClassName = (
        `element__delete ${isOwn ? 'element__delete_visible' : 'element__delete_hidden'}`
    )
    const isLiked = card.likes.some(i => i._id === userData._id);
    const cardLikeButtonClassName = (
        `element__button ${isLiked ? 'element__button_clicked' : 'element__button_notclicked'}`
    )

    function handleClick() {
        onCardClick(card);
    };//вызываем открытие попапа с картинкой и пробрасываем данные по картинке

    function handleLikeClick() {
        onCardLike(card);
    };//(диз)лайкаем карточку

    function handleDeleteClick() {
        onCardDelete(card);
    };//удаляем карточку

    return (
        <li className="element">
            <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}>
                <img className="element__delete-pic" src={deletePic} alt="Кнопка удалить"/>
            </button>
            <img className="element__pic" src={card.link} alt={card.name} onClick={handleClick}/>
            <div className="element__descrip">
                <h2 className="element__text">{card.name}</h2>
                <div className="element__button-container">
                    <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                    <p className="element__button-counter">{card.likes.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;