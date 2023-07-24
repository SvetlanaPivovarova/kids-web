import {API_URL, HEADERS} from "./constants";

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = ( {email, password,  name} ) => {
    return fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                email: email,
                password: password,
                name: name
            }
        )
    })
        .then((res) => {
            return checkResponse(res);
        });
};

export const authorize = (email, password) => {
        return fetch(`${API_URL}/signin`, {
            method: "POST",
            body: JSON.stringify({
                email,
                password
            }),
            headers: HEADERS
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.token) {
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('isLoggedIn', true)
                }
            })
}

export const checkToken = (token) => {
    return fetch(`${API_URL}/users/me`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            else {
                console.log(`Ошибка: ${res.status}`);
            }
        })
        .then(() => {
            const isLoggedIn = true;
            localStorage.setItem('isLoggedIn', isLoggedIn);
        })
}