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
        return { result: docsSnap.docs.map((doc) => ({...doc.data(), id: doc.id })), error: null }

        docsSnap.forEach(doc => {
            properties.push(doc.data())
        })
        // getDocuments
        result = properties
        // result = await getDocs(colRef)

        // result = await getDoc(docRef);
        return { result, error };
    } catch (err) {
        return { result: null, error: err };
    }
}