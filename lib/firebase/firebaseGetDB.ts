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

    const properties: any = []
    try {
        const docsSnap = await getDocs(colRef);
        
        docsSnap.forEach(doc => {
            properties.push(doc.data())
        })
        result = properties
        // result = await getDocs(colRef)

        // result = await getDoc(docRef);
    } catch (err) {
        error = err;
    }

    return { result, error };
}