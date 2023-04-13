import firebase_app from "./firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);



const signUp = async (email: string, password: string) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      return { result, error: null };
    } catch (err) {
      return { result: null, error: err };
    }
  };
  
  export default signUp;
  