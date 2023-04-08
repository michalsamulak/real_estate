import firebase_app from "./firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)
export default async function addData(collection: string, id: string, data: any) {

    try {
        const result = await setDoc(doc(db, collection, id), data, {
            merge: true,
        });
        const error = null
        return { result, error };


    } catch (err) {
        const error = err;
        const result = null
        return { result, error };

    }

}


