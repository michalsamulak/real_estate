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

const props = {
  imgSrc: '/', title: 'title', description: 'desc', bedrooms: '1', bathrooms: '2', area: 23, price: 233
}
      console.log(data);
    
      return (
        <div>
          <CardsWrapper>
          {data.map(record => {
            return (
              <PropertyCard key={record.title} imgSrc={record.img} title={record.title} description={record.description} bathrooms={1} bedrooms={record.num_bedrooms} area={212} price={record.price} />
            )
          })}
           <PropertyCard imgSrc= '/' title= 'title' description= 'desc' bedrooms={1} bathrooms={2} area={23} price={'233'} />
           <PropertyCard imgSrc= '/' title= 'title' description= 'desc' bedrooms={1} bathrooms={2} area={23} price={'233'} />
           <PropertyCard imgSrc= '/' title= 'title' description= 'desc' bedrooms={1} bathrooms={2} area={23} price={'233'} />
          </CardsWrapper>
           {/* <button onClick={handleForm}>buy</button> */}
        </div>
      )
    }


export default Buy