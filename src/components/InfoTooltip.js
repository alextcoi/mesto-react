import closeIcon from '../images/close_icon.svg';
import fail from '../images/fail.png';
import success from '../images/success.png';

function InfoTooltip({status, onClose, isOpen}) {

    let openClass;
    isOpen ? openClass = 'popup_opened' : openClass = '';

    return(
        <div className={`popup ${openClass}`}>
            <div className="infotooltip">
                <img className="infotooltip__picture" src={status ? success : fail} alt={status ? "Галочка" : "Крестик"}/>
                <p className="infotooltip__text">{status ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз." }</p>
                <button type="button" className="infotooltip__close" onClick={onClose}>
                    <img className="infotooltip__close-pic" src={closeIcon} alt="Кнопка Закрыть"/>
                </button>
            </div>
        </div>
    );
};

export default InfoTooltip;