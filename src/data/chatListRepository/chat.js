export default class ChatService {
    constructor(http) {
        this.http = http;
    } 
    async getChatData() {
        return this.http.fetch('/',{
            method : 'GET',
        })
    }

    async postMessage(msg) {
        return this.http.fetch('/',{
            method : 'POST',
            body : JSON.stringify(msg)
        })
    }

    async deleteMessgae(info) {
       return this.http.fetch(`?id=${info.id}&listname=${info.listname}`, {
            method : 'DELETE',
        });
    }
}