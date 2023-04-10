import firebase_app from "./firebase";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signIn(email: string, password: string) {
  
    try {
       const result = await signInWithEmailAndPassword(auth, email, password);
       const error = null

        return { result, error };
    } catch (err) {
       const error = err;
       const result = null
       return { result, error };
    }

}


