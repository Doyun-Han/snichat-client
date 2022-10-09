const TOKEN = 'token';

export default class tokenStorage {
    saveToken(token) {
        return localStorage.setItem(TOKEN, token);
    }

    getToken() {
        return localStorage.getItem(TOKEN);
    }

    clearToken() {
        return localStorage.clear(TOKEN);
    }
}