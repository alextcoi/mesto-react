import { useState, useEffect, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function EditProfilePopup ({isOpen, onClose, onUpdateUser}) {
    const userData = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setName(userData.name || '');
        setDescription(userData.about || '');
    }, [userData]);

    function handleNameChange(e) {
        setName(e.target.value);
    };

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateUser({
          name: name,
          about: description,
        });
    }

    return (
        <PopupWithForm
            title={'Редактировать профиль'}
            name={'profile'}
            buttonTitle={'Сохранить'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input name="form_name" id="form-name" className="form__item form__item_name popup__input" type="text" value={name} placeholder="Имя" minLength="2" maxLength="40" onChange={handleNameChange} required/>
            <span className="popup__error form-name-error"></span>
            <input name="form_profession" id="form-profession" className="form__item form__item_title popup__input" type="text" value={description} placeholder="О себе" minLength="2" maxLength="200" onChange={handleDescriptionChange} required/>
            <span className="popup__error form-profession-error"></span>
        </PopupWithForm>
    );
}

export default EditProfilePopup;