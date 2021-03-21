import { useRef, useState } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup ({isOpen, onClose, onUpdateAvatar}) {
    const userAvatar = useRef();
    const [data, setData] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateAvatar({
          avatar: userAvatar.current.value,
        });

        setData('');
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
            <input name="avatar" id="profile-pic-link" className="form__item form__item_card popup__input" placeholder="Ссылка на картинку" type="url" ref={userAvatar} value={data} onChange={(e) => setData(e.target.value)} required/>
            <span className="popup__error profile-pic-link-error"></span>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;