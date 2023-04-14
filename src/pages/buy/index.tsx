import { CardsWrapper } from '../../../components/PropertyCards/CardsWrapper'
import { PropertyCard } from '../../../components/PropertyCards/PropertyCard'
import getDocument from '../../../lib/firebase/firebaseGetDB'

const Buy = () => {



    // 'users', 'user-id2'
  


//     const handleForm = async () => {
        
//         const fetch = await getDocument('users', 'user-id2')
//         // const fetch = await getDocument('users', 'user-id2')
//         // const test = fetch.result?.data()
//         // console.log(test);

// console.log(fetch.result);
//      }

const props = {
  imgSrc: '/', title: 'title', description: 'desc', bedrooms: '1', bathrooms: '2', area: 23, price: 233
}
      
    
      return (
        <div>
          <CardsWrapper>

           <PropertyCard imgSrc= '/' title= 'title' description= 'desc' bedrooms={1} bathrooms={2} area={23} price={'233'} />
           <PropertyCard imgSrc= '/' title= 'title' description= 'desc' bedrooms={1} bathrooms={2} area={23} price={'233'} />
           <PropertyCard imgSrc= '/' title= 'title' description= 'desc' bedrooms={1} bathrooms={2} area={23} price={'233'} />
          </CardsWrapper>
           {/* <button onClick={handleForm}>buy</button> */}
        </div>
      )
    }


export default Buy