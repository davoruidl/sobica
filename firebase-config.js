/* ============================================================
   firebase-config.js
   Uredite SAMO ovu datoteku svojim podacima iz Firebase konzole.
   index.html je čita automatski, pa ga možete mijenjati/zamjenjivati
   bez da ikad ponovo dirate config.

   Vrijednosti: Firebase konzola → Project settings (zupčanik) →
   General → Your apps → Web → SDK setup and configuration → Config.
   (Ove vrijednosti nisu tajne — sigurnost daju pravila baze.)
   ============================================================ */

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyB57deqRay6qTsd0H6ZymWm4qI3FHPYtnU",
  authDomain: "sobica-457c9.firebaseapp.com",
  databaseURL: "https://sobica-457c9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sobica-457c9",
  storageBucket: "sobica-457c9.firebasestorage.app",
  messagingSenderId: "74210539250",
  appId: "1:74210539250:web:bbe5a59a749a174c9b426b",
  measurementId: "G-5BW3L3GMSW"
};

// Neobvezno: zadana soba ako u URL-u nema "#room=...".
window.DEFAULT_ROOM = "sobica-7f3a9";
