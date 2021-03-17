// code taken directly from https://jasonwatmore.com/post/2019/02/01/react-role-based-authorization-tutorial-with-example#projectstructure
import { BehaviorSubject } from 'rxjs';
import { handleResponse } from '../utils/handle-response.js';

let baseURL = ""

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003"
} else {
  baseURL = ""
}

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(baseURL + "/user/authenticate", requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}