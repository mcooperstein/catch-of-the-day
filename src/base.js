import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCkp0UDd2tmnMC4SDOLzbg6zH-jLSNZVQM",
    authDomain: "fish-marc-it.firebaseapp.com",
    databaseURL: "https://fish-marc-it.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
