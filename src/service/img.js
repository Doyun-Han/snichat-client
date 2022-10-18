export default class imgService {
    constructor(http) {
        this.http = http;
    }

    async getImage(url) {
        switch (url) {
            case 'newbalance992':
                return 'https://res.cloudinary.com/business-card/image/upload/v1666071349/newbalance992_n9blmg.jpg'
            case 'jordanRow':
                return'https://res.cloudinary.com/business-card/image/upload/v1666071349/jordanRow_npvdea.jpg'
            case 'jordanHigh':
                return 'https://res.cloudinary.com/business-card/image/upload/v1666071349/jordanHigh_xfkbki.jpg'
        }
    }
}