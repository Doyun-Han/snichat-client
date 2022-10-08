export default class imgService {
    constructor(http) {
        this.http = http;
    }

    async getImage(url) {
        const data = await fetch(`${this.http}/img/${url}`, {
            method : 'GET',
            headers :{ "Context-Type" : "image/jpg"}
        })
        return data
    }
}