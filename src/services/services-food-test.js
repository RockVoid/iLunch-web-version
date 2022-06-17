import { db } from '../firebase/index';

const foosTest = {
    async getMessages() {
        return db.collection('null-collection')
        .get()
        .then(data => {
            let messages = data;
        });
    }
}