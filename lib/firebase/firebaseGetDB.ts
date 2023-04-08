import firebase_app from "./firebase";
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore";


const db = getFirestore(firebase_app)
export default async function getDocument(collections: string, id: string) {
    let docRef = doc(db, collections, id);
    let colRef = collection(db, 'properties')
    const docsSnap = await getDocs(colRef);
    // let test = doc(db, 'properties')
    let result = null;
    let error = null;

    // docsSnap.forEach(doc => {
    //     console.log(doc.data());
    // })

    try {
        // result = await getDocs(colRef)
        result = docsSnap

        // result = await getDoc(docRef);
    } catch (e) {
        error = e;
    }

    return { result, error };
}