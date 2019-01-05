import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
// import firebase from 'firebase/app';
// import 'firebase/storage';
// const config = {
//     apiKey: "AIzaSyAoZWCvUecWs8h9OYRObt71KdWClJi45hQ",
//     authDomain: "emersonvicunadds-1.firebaseapp.com",
//     databaseURL: "https://emersonvicunadds-1.firebaseio.com",
//     projectId: "emersonvicunadds-1",
//     storageBucket: "emersonvicunadds-1.appspot.com",
//     messagingSenderId: "696896150536"
// };
// firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
