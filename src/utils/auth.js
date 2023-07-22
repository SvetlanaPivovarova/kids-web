import { API_URL } from "./constants";

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = ( {email, password,  name} ) => {
    const obj = JSON.stringify({
        email: email,
        password: password,
        name: name
    });
    console.log(obj)
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
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "email": email,
                "password": password
            }
        )
    })
        .then((response => response.json()))
        .then((data) => {
            if (data.token){
                localStorage.setItem('jwt', data.token);
                return data.token;
            }
            return data;
        })
};

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
        .then(data => data)
}