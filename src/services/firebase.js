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

export function createClinic(name, location, officeHours, numOfPeople, lat, lng) {
    const clinics = firebase.database().ref('clinics');
    const clinic = {
        clinicName: name,
        clinicLocation: location,
        clinicOfficeHours: officeHours,
        clinicNumOfPeople: numOfPeople,
        clinicLat: lat,
        clinicLng: lng
    }
    clinics.push(clinic);
}

export function listAll(ref) {
    let allclinics = [];
    const itemsRef = firebase.database().ref('clinics');
    itemsRef.once('value').then(function (snapshot) {
        let clinics = snapshot.val();
        for (let clinic in clinics) {
            allclinics.push({
                clinicName: clinics[clinic].clinicName,
                clinicLocation: clinics[clinic].clinicLocation,
                clinicOfficeHours: clinics[clinic].clinicOfficeHours,
                clinicNumOfPeople: clinics[clinic].clinicNumOfPeople,
                clinicLat: clinics[clinic].clinicLat,
                clinicLng: clinics[clinic].clinicLng,
            });
        }
        ref.setState({
            clinics: allclinics
        })
    });
}

export function incrPatients(name) {
    var clinic;
    var key;
    var itemsRef;
    itemsRef = firebase.database().ref('clinics');
    itemsRef.once('value').then(function (snapshot) {
        let clinics = snapshot.val();
        for (let eachkey in clinics) {
            var tmpName = clinics[eachkey].clinicName;
            if (tmpName.localeCompare(name) === 0) {
                key = eachkey;
                clinic = clinics[eachkey];
                break;
            }
        }
        var clinicRef = firebase.database().ref(`/clinics/${key}`);
        if (clinic !== undefined) {
            var updates = {};
            var num = parseInt(clinic.clinicNumOfPeople);
            num++;
            clinic.clinicNumOfPeople = num.toString();
            clinicRef.set(clinic);
        }
    });
}

export function decrPatients(name) {
    var clinic;
    var key;
    var itemsRef;
    itemsRef = firebase.database().ref('clinics');
    itemsRef.once('value').then(function (snapshot) {
        let clinics = snapshot.val();
        for (let eachkey in clinics) {
            var tmpName = clinics[eachkey].clinicName;
            if (tmpName.localeCompare(name) === 0) {
                key = eachkey;
                clinic = clinics[eachkey];
                break;
            }
        }
        var clinicRef = firebase.database().ref(`/clinics/${key}`);
        if (clinic !== undefined) {
            var updates = {};
            var num = parseInt(clinic.clinicNumOfPeople);
            if (num > 0) {
                num--;
                clinic.clinicNumOfPeople = num.toString();
                clinicRef.set(clinic);
            }
        }
    });
}

export function createEmployee(uid, clinicName) {
    const employeeInfo = firebase.database().ref('employeeInfo');
    const employee = {
        employeeUid: uid,
        nameOfClinic: clinicName
    }
    employeeInfo.push(employee);
}

export function plusOne(uid) {
    var clinicName;
    var clinicRef = firebase.database().ref('employeeInfo');
    clinicRef.orderByChild("employeeUid").equalTo(uid).on("value", function (snapshot) {
        snapshot.forEach((function (child) { clinicName = snapshot.key }));
    });
    return clinicName;
}

export function minusOne(uid) {
    var clinicName;
    var clinicRef = firebase.database().ref('employeeInfo');
    clinicRef.orderByChild("employeeUid").equalTo(uid).on("value", function (snapshot) {
        snapshot.forEach((function (child) { clinicName = snapshot.key }));
    });
    return clinicName;
}
