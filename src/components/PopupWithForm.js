import closeIcon from '../images/close_icon.svg';

function PopupWithForm ({title, name, buttonTitle, children, isOpen, onClose}) {
    
    let openClass;
    isOpen ? openClass = 'popup_opened' : openClass = '';//проверяем - нужно ли открыть попап?

    return (
        <section className={`popup popup_${name} ${openClass}`}>
            <form name={name} className={`form form_${name} popup__form`} noValidate>
                <h2 className={`form__title form__title_${name}`}>{title}</h2>
                {children}
                <button type="submit" className="form__save-button popup__button">{buttonTitle}</button>
                <button type="button" className="popup__close-button" onClick={onClose}>
                    <img className="popup__close-button-picture" src={closeIcon} alt="Кнопка Закрыть"/>
                </button>
            </form>
        </section>
    );
}

export default PopupWithForm;