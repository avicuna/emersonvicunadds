import firebase from 'firebase/app';
import 'firebase/storage';
import saveAs from 'file-saver';
const config = {
    apiKey: "AIzaSyAoZWCvUecWs8h9OYRObt71KdWClJi45hQ",
    authDomain: "emersonvicunadds-1.firebaseapp.com",
    databaseURL: "https://emersonvicunadds-1.firebaseio.com",
    projectId: "emersonvicunadds-1",
    storageBucket: "emersonvicunadds-1.appspot.com",
    messagingSenderId: "696896150536"
};
firebase.initializeApp(config);
const storage = firebase.storage();
const storageRef = storage.ref();
export const getMedicalHistory = () => {
    storageRef
        .child('MedicalHistory.pdf')
        .getDownloadURL()
        .then( (url) => {
            const xhr = new XMLHttpRequest();
            let blob = "";
            // xhr.responseType = 'blob';
            console.log("Url is: " + url);
            xhr.onload = (e) => {
                blob = xhr.response;
                console.log(blob);
            };
            xhr.open('GET', url);
            xhr.send();
            let a = document.getElementById('download');
            // const myBlob = new Blob([blob], {type: 'application/pdf'});
            const file = new File([blob], "MedicalHistory.pdf");
            saveAs(file);
            a.href = url;
        }).catch( (error) => {
        switch (error.code) {
            case 'storage/object-not-found':
                // File doesn't exist
                alert('File does not exist');
                break;

            case 'storage/unauthorized':
                // User doesn't have permission to access the object
                alert('User does not have permission to access the object');
                break;

            case 'storage/canceled':
                // User canceled the upload
                alert('User cancelled the upload');
                break;

            case 'storage/unknown':
                // Unknown error occurred, inspect the server response
                alert('Unknown error occurred, inspect the server response');
                break;

            default:
                break;
        }
    })
};
