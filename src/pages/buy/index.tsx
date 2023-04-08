import React from 'react'
import getDocument from '../../../lib/firebase/firebaseGetDB'

const Buy = () => {





    const handleForm = async () => {
        
        const fetch = await getDocument('users', 'user-id2')
        const test = fetch.result?.data()
        console.log(test);
     }
      
    
      return (
        <div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           test
           <button onClick={handleForm}>buy</button>
        </div>
      )
    }


export default Buy