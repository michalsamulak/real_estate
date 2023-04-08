import { useState } from 'react';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import  firebaseApp  from '../lib/firebase/firebase'; 

interface IAddData {
  collection: string;
  id: string
  data: any;
}
const useAddData = () => {
  // const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const db = getFirestore(firebaseApp); 

  const addData = async ({ collection, id, data }: IAddData) => {
    try {
      const docRef = doc(db, collection, id);
      await setDoc(docRef, data, { merge: true });
      // setResult('Data added successfully!');
      setError(null);
    } catch (error: any) {
      // setResult(null);
      setError(error);
    }
  };

  return [addData, /*result,*/ error];
};

export default useAddData;
