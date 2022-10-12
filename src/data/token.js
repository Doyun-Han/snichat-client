const TOKEN = 'token';

export default class tokenStorage {
    saveToken(token) {
        localStorage.setItem(TOKEN, token);
        return localStorage.setItem(TOKEN, token);
    }

    getToken() {
        localStorage.getItem(TOKEN);
        return localStorage.getItem(TOKEN);
    }

    clearToken() {
        localStorage.clear(TOKEN);
        return localStorage.clear(TOKEN);
    }
}