import deletePic from '../images/delete__button.png';

function Card ({card, onCardClick}) {

    function handleClick() {
        onCardClick(card);
    };//вызываем открытие попапа с картинкой и пробрасываем данные по картинке

    return (
        <li className="element">
            <button type="button" className="element__delete">
                <img className="element__delete-pic" src={deletePic} alt="Кнопка удалить"/>
            </button>
            <img className="element__pic" src={card.link} alt={card.name} onClick={handleClick}/>
            <div className="element__descrip">
                <h2 className="element__text">{card.name}</h2>
                <div className="element__button-container">
                    <button type="button" className="element__button"></button>
                    <p className="element__button-counter">{card.likes.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;