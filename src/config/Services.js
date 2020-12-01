import firebase from './firebaseConfig';

const { firebaseMain, fieldValue } = firebase;

const db = firebaseMain.firestore();

const HTTP_SERVICE = {
  inputUser(data) {
    let userRef;
    userRef = db.collection('user').add(data);
    return userRef;
  },
  login(data) {
    let userRef;
    userRef = db.collection('user')
      .where('username', '==', data.username)
      .where('password', '==', data.password)
      .get();
    return userRef;
  },
  inputItem(data) {
    let userRef;
    userRef = db.collection('items').add(data);
    return userRef;
  },
  getAllItem() {
    let userRef;
    userRef = db.collection('items').get();
    return userRef;
  },
  kasir(){
    let userRef;
    userRef = db.collection('item').doc('asdfasdf').update({qty: fieldValue.increment(-1)})
  }
}

export default HTTP_SERVICE;