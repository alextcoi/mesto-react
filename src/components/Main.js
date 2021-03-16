import editButton from '../images/edit_button.svg';
import addButton from '../images/add_button.svg';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import React from 'react';

function Main ({onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete}) {

    const userData = React.useContext(CurrentUserContext);//подписываемся на контекст с данными пользователя

    return (
        <main className="main">
            <section className="profile">
                <button type="button" className="profile__avatar-container" onClick={onEditAvatar}>
                    <div className="profile__avatar-edit-button-container">
                        <img className="profile__avatar-edit-button" src={editButton} alt="Кнопка Редактировать"/>
                    </div>
                    <img className="profile__avatar" src={userData.avatar} alt="Фото пользователя"/>
                </button>
                <div className="profile__info">
                    <h1 id="name" className="profile__title">{userData.name}</h1>
                    <button type="button" className="profile__edit-button" onClick={onEditProfile}>
                        <img className="profile__edit-button-picture" src={editButton} alt="Кнопка Редактировать"/>
                    </button>
                    <p id="profession" className="profile__subtitle">{userData.about}</p>
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
                                onCardLike={onCardLike}
                                onCardDelete={onCardDelete}
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