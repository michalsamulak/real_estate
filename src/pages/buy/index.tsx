import React from 'react'
import getDocument from '../../../lib/firebase/firebaseGetDB'

const Buy = () => {



    // 'users', 'user-id2'
  


    const handleForm = async () => {
        
        const fetch = await getDocument('users', 'user-id2')
        const test = fetch.result?.data()
        console.log(test);
     }
      
    
      return (
        <div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           tets
           <button onClick={handleForm}>buy</button>
        </div>
      )
    }


export default Buy