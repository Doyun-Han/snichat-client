export default class AuthService{
    constructor(http, tokenStorage) {
        this.http = http;
        this.tokenStorage = tokenStorage;
    }

    async signup(username, email, password) {
        const data = await this.http.fetch('/auth/signup', {
            method : 'POST',
            body : JSON.stringify({
                username,
                email,
                password
            })
        })
        this.tokenStorage.saveToken(data.token);
        return data;
    }

    async login(email, password) {
        const data = await this.http.fetch('/auth/login', {
            method : 'POST',
            body : JSON.stringify({email, password})
        });
        this.tokenStorage.saveToken(data.token);
        return data;
    }

    async me() {
        const token = this.tokenStorage.getToken();
        return await this.http.fetch('/auth/me', {
            method : 'GET',
            headers : { Authorization : `Bearer ${token}`}
        })
    }

    async guestUser() {
        const data =  await this.http.fetch('/auth/', {
            method : 'GET'
        })
        this.tokenStorage.saveToken(data.token);
        return data;
    }

    async logout() {
        this.tokenStorage.clearToken();
        await this.guestUser();
    }
}