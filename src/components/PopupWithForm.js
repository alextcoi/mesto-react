
import closeIcon from '../images/close_icon.svg';

function PopupWithForm (props) {
    
    let openClass;
    props.isOpen ? openClass = 'popup_opened' : openClass = '';//проверяем - нужно ли открыть попап?

    return (
        <section className={`popup popup_${props.name} ${openClass}`}>
            <form name={props.name} className={`form form_${props.name} popup__form`} onSubmit={props.onSubmit} noValidate>
                <h2 className={`form__title form__title_${props.name}`}>{props.title}</h2>
                {props.children}
                <button type="submit" className="form__save-button popup__button">{props.buttonTitle}</button>
                <button type="button" className="popup__close-button" onClick={props.onClose}>
                    <img className="popup__close-button-picture" src={closeIcon} alt="Кнопка Закрыть"/>
                </button>
            </form>
        </section>
    );
}

export default PopupWithForm;