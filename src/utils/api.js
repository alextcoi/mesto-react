class Api {
    constructor(baseUrl, password) {
        this._password = password;
        this._baseUrl = baseUrl
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                authorization: this._password,
            }
        })
        .then(this._checkResponse)
    }

    getCards() {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'GET',
            headers: {
                authorization: this._password,
            }
        })
        .then(this._checkResponse)
    }

    putLike(id) {
        return fetch(`${this._baseUrl}/cards/likes/${id}`, {
            method: 'PUT',
            headers: {
                authorization: this._password
            },           
        })
        .then(this._checkResponse)
    }

    deleteLike(id) {
        return fetch(`${this._baseUrl}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._password
            }            
        })
        .then(this._checkResponse)
    }

    patchProfile(item) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._password,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: item.name,
                about: item.about
            }),
            })
            .then(this._checkResponse)
    }

    patchProfilePic(item) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._password,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: item.avatar
            }),
            })
            .then(this._checkResponse)
    }

    postPicture(item) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._password,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: item.name,
                link: item.link
            }),
            })
            .then(this._checkResponse)
    }

    deletePicture(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: 'f0a6b51b-b6dd-4422-9c6f-1c6d9f1c16da'
            }
        })
        .then(this._checkResponse)
    }
}

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-20', 'f0a6b51b-b6dd-4422-9c6f-1c6d9f1c16da');

export default api;
