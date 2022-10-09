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
        return this.http.fetch('/auth/', {
            method : 'GET',
            headers : { Authorization : `Bearer ${token}`}
        }).then((res) => {
            this.tokenStorage.saveToken(res.token);
            return res
        })
    }

    async logout() {
        this.tokenStorage.clearToken();
        await this.me();
    }
}