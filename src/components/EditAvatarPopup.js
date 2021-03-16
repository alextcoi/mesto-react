import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup ({isOpen, onClose, onUpdateAvatar}) {
    const userAvatar = useRef();

    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateAvatar({
          avatar: userAvatar.current.value,
        });
      }

    return (
        <PopupWithForm
            title={'Обновить аватар'}
            name={'profile-picture'}
            buttonTitle={'Сохранить'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input name="avatar" id="profile-pic-link" className="form__item form__item_card popup__input" placeholder="Ссылка на картинку" type="url" ref={userAvatar} required/>
            <span className="popup__error profile-pic-link-error"></span>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;