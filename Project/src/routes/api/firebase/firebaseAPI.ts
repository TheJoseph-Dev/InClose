export { Firebase }

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

import { FIREBASE_API_KEY } from "$env/static/private"
// Your web app's Firebase configuration

// Auth
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, type UserCredential } from "firebase/auth"


// Initialize Firebase
class Firebase {
    
    private static firebaseConfig = {
        apiKey: FIREBASE_API_KEY,
        authDomain: "inclose-210223.firebaseapp.com",
        projectId: "inclose-210223",
        storageBucket: "inclose-210223.appspot.com",
        messagingSenderId: "318315242717",
        appId: "1:318315242717:web:1becf5e87e32f1d2ea6734"
      };

    private static app = initializeApp(this.firebaseConfig, "InCloseApp");
    private static auth = getAuth(this.app);

    static async login(email: string, password: string): Promise<string> { 
        try {
            const loginUser = await signInWithEmailAndPassword(this.auth, email, password)
            return loginUser.user.uid
        }
        catch(error) { throw new Error(String(error)) }

        return ""
    }

    static async register(email: string, password: string): Promise<string> {
        try {
            const createdUser = await createUserWithEmailAndPassword(this.auth, email, password)
            return createdUser.user.uid
        }
        catch(error) { console.log(error) }

        return ""
    }

    static async logout() {
        try { await signOut(this.auth) }
        catch(error) { console.log(error) }
    }
}