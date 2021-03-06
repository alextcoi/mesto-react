import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { useState } from 'react';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';


function App() {
    const [isEditProfilePopupOpen, handleEditProfileClick] = useState(false);//стейт для открытия попапа для редактирования данных пользователя
    const [isAddPlacePopupOpen, handleAddPlaceClick] = useState(false);//стейт для открытия попапа для добавления карточки
    const [isEditAvatarPopupOpen, handleEditAvatarClick] = useState(false);//стейт для открытия попапа для редактирования фото пользователя
    const [selectedCard, handleCardClick] = useState(false);//стейт для открытия попапа для открытия картинки

    function closeAllPopups() {
        handleEditProfileClick(false);
        handleAddPlaceClick(false);
        handleEditAvatarClick(false);
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
                    children={''}
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                />
                <PopupWithForm
                    title={'Редактировать профиль'}
                    name={'profile'}
                    buttonTitle={'Сохранить'}
                    children={''}
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                />
                <PopupWithForm
                    title={'Новое место'}
                    name={'card'}
                    buttonTitle={'Создать'}
                    children={''}
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                />
                <ImagePopup
                    card={selectedCard}
                    onClose={closeAllPopups}
                />
            </div>
        </div>
    );
}

export default App;