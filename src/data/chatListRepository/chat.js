export default class ChatService {
    constructor(baseURL) {
        this.baseURL = baseURL;
    } 
    async getChatData() {
        const response = await fetch(`${this.baseURL}`,{
            method : 'GET',
            headers : {'Content-Type' : 'application/json'}
        })

        const data = await response.json();
        if(response.status !== 200) {
            throw new Error(data.message)
        }
        return data
    }

    async postMessage(msg) {
        const response = await fetch(`${this.baseURL}`,{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(msg)
        })

        const data = await response.json();
        if(response.status !== 201) {
            throw new Error(data.message)
        }
        return data
    }
}