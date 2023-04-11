import firebase_app from "./firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)

// requestHandler(async () => {
//  const result = await setDoc(doc(db, collection, id), data, {
//     merge: true,
// });
// })

export default async function addData(collection: string, id: string, data: any) {

    try {
        const result = await setDoc(doc(db, collection, id), data, {
            merge: true,
        });
     
        return { result, error: null };


    } catch (err) {
        const error = err;
        return { result: null, error };

    }

}


