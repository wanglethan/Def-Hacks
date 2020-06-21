import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBcHqxDHOMBk59sN6SOIKUf3XWUK5teNeM",
    authDomain: "defhacks-database.firebaseapp.com",
    databaseURL: "https://defhacks-database.firebaseio.com",
    projectId: "defhacks-database",
    storageBucket: "defhacks-database.appspot.com",
    messagingSenderId: "21353571598",
    appId: "1:21353571598:web:ff0f14409f58b9c6afe35f",
    measurementId: "G-30LP2F5CLN"
};
firebase.initializeApp(firebaseConfig);
export default firebase;

export function createClinic(name, location, officeHours, numOfPeople) {
    const clinics = firebase.database().ref('clinics');
    const clinic = {
        clinicName: name,
        clinicLocation: location,
        clinicOfficeHours: officeHours,
        clinicNumOfPeople: numOfPeople
    }
    clinics.push(clinic);
}