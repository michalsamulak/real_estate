import { getFirestore, doc, setDoc, collection, getDocs } from "firebase/firestore";

import firebase_app from '../../lib/firebase/firebase'

const db = getFirestore(firebase_app)

// generyk
export const requestHandlerSet = async (collection: string, id: string, data: any) => {
    return await setDoc(doc(db, collection, id), data, {
        merge: true,
    });
}

export const requestHandlerGet = async (dataBase: string) => {

    const colRef = collection(db, dataBase)
    const docsSnap = await getDocs(colRef);

    return  docsSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

}