import {GetStaticProps} from 'next'
import propertiesJSON from "../../data/staticData.json"
import { PropertyPage } from "../../components/Property/PropertyPage";
import { IProperty } from "../../components/Property/types";

export const getStaticProps: GetStaticProps  = async ({ params }) => {
    try {
        if (!params) throw 'No params attached'

        // find
        const property = propertiesJSON.filter((singleProperty) => {
            return singleProperty.id === params.id;
        });

        return {
            props: {
                data: property,
            },
        };
    } catch (error) {
        return {
            props: {
                data: "", // undefined
            },
        };
    }
};

export const getStaticPaths = async () => {
    const paths = propertiesJSON.map((record) => {
        return { params: { id: record.id } };
    });

    return {
        paths,
        fallback: false,
    };
};

// data: IProperty[] | undefined
const PropertyDetails = ({ data }: { data: IProperty[] }) => {
    if (!data) return <div>Sorry no data retrieved. Try again</div>;

    console.log(data);
    return (
        <>
            <PropertyPage property={data[0]} />
        </>
    );
};

export default PropertyDetails;

// import { CardsWrapper } from '../../../components/PropertyCards/CardsWrapper'
// import { PropertyCard } from '../../../components/PropertyCards/PropertyCard'
// import getDocument from '../../../lib/firebase/firebaseGetDB'

// import data from '../../../data/staticData.json'

// const Buy = () => {

//     // 'users', 'user-id2'

// //     const handleForm = async () => {

// //         const fetch = await getDocument('users', 'user-id2')
// //         // const fetch = await getDocument('users', 'user-id2')
// //         // const test = fetch.result?.data()
// //         // console.log(test);

// // console.log(fetch.result);
// //      }

//       console.log(data);

//       return (
//         <div>

//            {/* <button onClick={handleForm}>buy</button> */}
//         </div>
//       )
//     }

// export default Buy
