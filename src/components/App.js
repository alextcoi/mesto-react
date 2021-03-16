import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { useState, useEffect } from 'react';
import api from '../utils/api.js';
import ImagePopup from './ImagePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';


function App() {
    const [isEditProfilePopupOpen, setEditProfile] = useState(false);//стейт для открытия попапа для редактирования данных пользователя
    const [isAddPlacePopupOpen, setAddPlace] = useState(false);//стейт для открытия попапа для добавления карточки
    const [isEditAvatarPopupOpen, setEditAvatar] = useState(false);//стейт для открытия попапа для редактирования фото пользователя
    const [selectedCard, handleCardClick] = useState(false);//стейт для открытия попапа для открытия картинки
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);//стейт для массива карточек с сервера

    useEffect(() => {
        handleRequest();
    }, []);//хук с запросом на сервер за данным пользователя и карточками

    function handleRequest() {
        api.getCards()
            .then((result) => {
                setCards(result);
            })
            .catch((err) => {console.log(err)});

        api.getProfile()
            .then((result) => {
                setCurrentUser(result);
            })
            .catch((err) => {console.log(err)});
    };//кидаем запрос на сервер за данным пользователя и карточками

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

    function handleSubmitUser(item) {
        api.patchProfile(item)
            .then(result => setCurrentUser(result))
            .then(closeAllPopups())
            .catch((err) => {console.log(err)});
    };//отправляем обновленные данные о пользователе, обновляем стейт с пользователем

    function handleUpdateAvatar(item) {
        api.patchProfilePic(item)
            .then(result => setCurrentUser(result))
            .then(closeAllPopups())
            .catch((err) => {console.log(err)});
    };//отправляем новую аватарку пользователя, обновляем стейт с пользователем

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        isLiked 
            ? api.deleteLike(card._id).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));})
            : api.putLike(card._id).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));}); 
    };//проверяем лайк на карточке, (диз)лайкаем

    function handleCardDelete(card) {
        api.deletePicture(card._id)
            .then(setCards(cards.filter(i => i._id !== card._id)))
            .catch((err) => {console.log(err)});
    };//удаляем карточку на сервере, обновляем стейт с карточками

    function handleAddPlaceSubmit(item) {
        api.postPicture(item)
            .then((result) => {
                setCards([result, ...cards]);
            })
            .then(closeAllPopups())
            .catch((err) => {console.log(err)});
    };//отправляем новую карточку на сервер, обновляем стейт с карточками

    return (
        <div className="App">
            <div className="page">
                <CurrentUserContext.Provider value={currentUser}>
                    <Header/>
                    <Main
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onEditAvatar={handleEditAvatarClick}
                        onCardClick={handleCardClick}
                        cards={cards}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                    />
                    <Footer/>
                    <EditAvatarPopup
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        onUpdateAvatar={handleUpdateAvatar}
                    />

                    <EditProfilePopup
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        onUpdateUser={handleSubmitUser}
                    />
                    
                    <AddPlacePopup
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        onAddPlace={handleAddPlaceSubmit}
                    />

                    <ImagePopup
                        card={selectedCard}
                        onClose={closeAllPopups}
                    />
                </CurrentUserContext.Provider>
            </div>
        </div>
    );
}

export default App;

//https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg
//https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg