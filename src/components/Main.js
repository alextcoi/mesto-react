import editButton from '../images/edit_button.svg';
import addButton from '../images/add_button.svg';
import api from '../utils/api.js';
import { useEffect, useState } from 'react';
import Card from './Card';

function Main ({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

    const [userName, setName] = useState('');//стейт для имени пользователя
    const [userDescription, setDescription] = useState('');//стейт для профессии пользователя
    const [userAvatar, setAvatar] = useState('');//стейт для фото профиля
    const [cards, setCards] = useState([]);//стейт для массива карточек с сервера

    useEffect(() => {
        handleRequest();
    }, []);//кидаем один раз запрос на сервер за данным пользователя и карточками

    const handleRequest = () => {
        api.getProfile()
            .then((result) => {
                setName(result.name);
                setDescription(result.about);
                setAvatar(result.avatar);
            })
            .catch((err) => {console.log(err)});

        api.getCards()
            .then((result) => {
                setCards(result);
            })
            .catch((err) => {console.log(err)});
    };//кидаем один раз запрос на сервер за данным пользователя и карточками

    return (
        <main className="main">
            <section className="profile">
                <button type="button" className="profile__avatar-container" onClick={onEditAvatar}>
                    <div className="profile__avatar-edit-button-container">
                        <img className="profile__avatar-edit-button" src={editButton} alt="Кнопка Редактировать"/>
                    </div>
                    <img className="profile__avatar" src={userAvatar} alt="Фото пользователя"/>
                </button>
                <div className="profile__info">
                    <h1 id="name" className="profile__title">{userName}</h1>
                    <button type="button" className="profile__edit-button" onClick={onEditProfile}>
                        <img className="profile__edit-button-picture" src={editButton} alt="Кнопка Редактировать"/>
                    </button>
                    <p id="profession" className="profile__subtitle">{userDescription}</p>
                </div>
                <button type="button" className="profile__add-button" onClick={onAddPlace}>
                    <img className="profile__add-button-picture" src={addButton} alt="Кнопка Добавить"/>
                </button>
            </section>
            <section className="elements">
                <ul className="elements__container">
                    {
                        cards.map((item) => (
                            <Card
                                key={item._id}
                                card={item}
                                onCardClick={onCardClick}
                            />)
                        )
                    }
                </ul>
            </section>
        </main>
    );
}

export default Main

//https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg