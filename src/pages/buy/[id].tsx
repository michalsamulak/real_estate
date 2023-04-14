import { CardsWrapper } from '../../../components/PropertyCards/CardsWrapper'
import { PropertyCard } from '../../../components/PropertyCards/PropertyCard'
import getDocument from '../../../lib/firebase/firebaseGetDB'

import data from '../../../data/staticData.json'

const Buy = () => {



    // 'users', 'user-id2'
  


//     const handleForm = async () => {
        
//         const fetch = await getDocument('users', 'user-id2')
//         // const fetch = await getDocument('users', 'user-id2')
//         // const test = fetch.result?.data()
//         // console.log(test);

// console.log(fetch.result);
//      }


      console.log(data);
    
      return (
        <div>
         
           {/* <button onClick={handleForm}>buy</button> */}
        </div>
      )
    }


export default Buy