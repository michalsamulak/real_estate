import firebase_app from "./firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { IAuth } from "./type";

const auth = getAuth(firebase_app);



export default async function signUp({email, password}: IAuth) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
        error = err;
    }

    return { result, error };
}