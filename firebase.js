/**
 * firebase.js — Configuration Firebase partagée
 * Importé par index.html, admin/login.html, admin/dashboard.html
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore }   from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth }        from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
    apiKey:            "AIzaSyDMC9RPVIH2kHc3brvB9dR6TTEbBaaXxsg",
    authDomain:        "le-jardin-des-saveurs-630bf.firebaseapp.com",
    projectId:         "le-jardin-des-saveurs-630bf",
    storageBucket:     "le-jardin-des-saveurs-630bf.firebasestorage.app",
    messagingSenderId: "965407064324",
    appId:             "1:965407064324:web:aa9a447fa94a19c69b5051",
    measurementId:     "G-1QW12S52EN"
};

const app = initializeApp(firebaseConfig);

export const db   = getFirestore(app);
export const auth = getAuth(app);
