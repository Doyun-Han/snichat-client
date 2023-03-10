export default class ChatService {
    constructor(http, tokenStorage, socket) {
        this.socket = socket;
        this.http = http;
        this.tokenStorage = tokenStorage;
    } 
    async getChatData() {
        return this.http.fetch('/chat-lists',{
            method : 'GET',
            headers : this.getHeaders()
        })
    }

    async postMessage(msg, activeListname) {
        const message = {msg,activeListname }
        return this.http.fetch('/chat-lists',{
            method : 'POST',
            body : JSON.stringify(message),
            headers : this.getHeaders()
        })
    }

    async deleteMessgae(info) {
       return this.http.fetch(`/chat-lists/?id=${info.id}&listname=${info.listname}`, {
            method : 'DELETE',
            headers : this.getHeaders()
        });
    }

    getHeaders() {
        const token = this.tokenStorage.getToken();
        return {
            Authorization : `Bearer ${token}`
        }
    }

    onSync(callback) {
        return this.socket.onSync('message', callback)
    }
}