import { useState } from "react";
import firebase_app from "../firebase/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export default function useFetchData(collection: any, id: string) {
  const db = getFirestore(firebase_app);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

  const getDocument = async () => {
    try {
      const docRef = doc(db, collection, id);
      const result = await getDoc(docRef);
      setResult(result);
      setError(null);
    } catch (e: any) {
      setResult(null);
      setError(e);
    }
  };

  return [getDocument, result, error];
}
