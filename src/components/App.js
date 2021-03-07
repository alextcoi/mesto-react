import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { useState } from 'react';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';


function App() {
    const [isEditProfilePopupOpen, setEditProfile] = useState(false);//стейт для открытия попапа для редактирования данных пользователя
    const [isAddPlacePopupOpen, setAddPlace] = useState(false);//стейт для открытия попапа для добавления карточки
    const [isEditAvatarPopupOpen, setEditAvatar] = useState(false);//стейт для открытия попапа для редактирования фото пользователя
    const [selectedCard, handleCardClick] = useState(false);//стейт для открытия попапа для открытия картинки

    function handleEditProfileClick() {
        setEditProfile(true);
    };

    function handleAddPlaceClick() {
        setAddPlace(true);
    };

    function handleEditAvatarClick() {
        setEditAvatar(true);
    };

    function closeAllPopups() {
        setEditProfile(false);
        setAddPlace(false);
        setEditAvatar(false);
        handleCardClick(false);
    };//закрываем попапы

    return (
        <div className="App">
            <div className="page">
                <Header/>
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                />
                <Footer/>
                <PopupWithForm
                    title={'Обновить аватар'}
                    name={'profile-picture'}
                    buttonTitle={'Сохранить'}
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                >
                    <input name="avatar" id="profile-pic-link" className="form__item form__item_card popup__input" placeholder="Ссылка на картинку" type="url" required/>
                    <span className="popup__error profile-pic-link-error"></span>
                </PopupWithForm>

                <PopupWithForm
                    title={'Редактировать профиль'}
                    name={'profile'}
                    buttonTitle={'Сохранить'}
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                >
                    <input name="form_name" id="form-name" className="form__item form__item_name popup__input" type="text" placeholder="Имя" minLength="2" maxLength="40" required/>
                    <span className="popup__error form-name-error"></span>
                    <input name="form_profession" id="form-profession" className="form__item form__item_title popup__input" type="text" placeholder="О себе" minLength="2" maxLength="200" required/>
                    <span className="popup__error form-profession-error"></span>
                </PopupWithForm>
                
                <PopupWithForm
                    title={'Новое место'}
                    name={'card'}
                    buttonTitle={'Создать'}

                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                >
                    <input name="name" id="card-name" className="form__item form__item_card popup__input" type="text" placeholder="Название" minLength="2" maxLength="30" required/>
                    <span className="popup__error card-name-error"></span>
                    <input name="link" id="card-link" className="form__item form__item_card popup__input" placeholder="Ссылка на картинку" type="url" required/>
                    <span className="popup__error card-link-error"></span>
                </PopupWithForm>
                <ImagePopup
                    card={selectedCard}
                    onClose={closeAllPopups}
                />
            </div>
        </div>
    );
}

export default App;