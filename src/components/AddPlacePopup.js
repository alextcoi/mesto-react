import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup ({isOpen, onClose, onAddPlace}) {
    const [title, setTitle] = useState('');
    const [refer, setRefer] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
      
        onAddPlace({
            name: title,
            link: refer
        });

        setTitle('');
        setRefer('');
    }

    return (
        <PopupWithForm
            title={'Новое место'}
            name={'card'}
            buttonTitle={'Создать'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input name="name" id="card-name" className="form__item form__item_card popup__input" type="text" placeholder="Название" minLength="2" maxLength="30" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <span className="popup__error card-name-error"></span>
            <input name="link" id="card-link" className="form__item form__item_card popup__input" placeholder="Ссылка на картинку" type="url" value={refer} onChange={(e) => setRefer(e.target.value)} required/>
            <span className="popup__error card-link-error"></span>
        </PopupWithForm>
    );
}

export default AddPlacePopup;