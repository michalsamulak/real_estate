import React, { useEffect } from 'react'
import getDocument from '../../../lib/firebase/firebaseGetDB'
import useFetchData from '../../../lib/hooks/useFetchData'
import useGetDocument from '../../../lib/hooks/useFetchData';

const Buy = () => {

  const [getDocument, result, error] = useFetchData("users", "test");

  useEffect(() => {
    getDocument();
  }, []);

    const handleForm = async () => {
        
       
        console.log(result.data());
     }
      
    
      return (
        <div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           test
           <button onClick={handleForm}>buy</button>
        </div>
      )
    }


export default Buy