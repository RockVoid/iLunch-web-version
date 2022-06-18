import { db } from '../firebase/firebase-sdk-config';

const foosTest = {
    async getMessages() {
        return db.collection('null-collection')
        .get()
        .then(data => {
            let messages = data;
        });
    }
}