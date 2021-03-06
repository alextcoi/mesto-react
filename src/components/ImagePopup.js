import closeIcon from '../images/close_icon.svg'

function ImagePopup ({card, onClose}) {

    let openClass;
    card ? openClass = 'popup_opened' : openClass = '';//проверяем - нужно ли открыть попап?

    return (
        <section className={`popup popup_opened-card ${openClass}`}>
            <figure className="opened-card">
                <button type="button" className="popup__close-button" onClick={onClose}>
                    <img className="popup__close-button-picture" src={closeIcon} alt="Кнопка Закрыть"/>
                </button>
                <img className="opened-card__pic" src={card.link} alt={card.name}/>
                <p className="opened-card__name">{card.name}</p>
            </figure>
        </section>
    )
}

export default ImagePopup;