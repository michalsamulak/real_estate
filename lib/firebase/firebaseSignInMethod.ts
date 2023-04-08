import firebase_app from "./firebase";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { IAuth } from "./type";

const auth = getAuth(firebase_app);

export default async function signIn({email, password}: IAuth) {
  
    try {
       const result = await signInWithEmailAndPassword(auth, email, password);
       const error = null

        return { result, error };
    } catch (e) {
       const error = e;
       const result = null
       return { result, error };
    }

}


