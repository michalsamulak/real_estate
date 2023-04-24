import { useState } from "react";
// import initFirebase from '../../lib/firebase/firebase'
import { CardsWrapper } from "@/components/PropertyCards/CardsWrapper";
import { PropertyCard } from "@/components/PropertyCards/PropertyCard";
// import WriteToCloudFirestore from "../../components/cloudFirestore/Write";
import data1 from "@/data/staticData.json"
import { SearchBar } from "@/components/Search";
import { getRandomItems } from "@/utils/helpers/randomArrayElements";
import { PageWrapper } from "@/components/PageWrapper";
import styles from "@/styles/Home.module.scss"; 
import { IEstateData } from "@/types/estateTypes";
import getDocument from "@/lib/firebase/getFromDB";
import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import { db } from "@/utils/firebase/requestHandlers";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

const NUM_PROPERTIES_ON_HOME_PAGE = 6


const Home = ({ properties }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const defaultDisplayProperties = getRandomItems(properties, NUM_PROPERTIES_ON_HOME_PAGE)
    const [searchItems, setSearchItems] = useState(defaultDisplayProperties)
    return (
        <>
        <PageWrapper title={'Real Estate Agency - Your One Stop Shop for Buying and Selling Properties'}/>
            
            <main className={styles.main}>
                <h1 className={styles.h1}>Find Your Dream Home</h1>
            <SearchBar setSearchItems={setSearchItems} properties={properties}/>
            </main>
            <CardsWrapper>
          {searchItems && searchItems.map((record: IEstateData) => {
            const { id, num_bedrooms, img, ...restData } = record
            
            return (
             <PropertyCard key={id} record={record} />
            )
          })}
          </CardsWrapper>
  
      
        </>
    );
  }

  export default Home


export async function getServerSideProps() {

  try {

    // const colRef = collection(db, 'properties')
    // const docsSnap = await getDocs(colRef);
    // const properties =  docsSnap.docs.map((doc) => ({ ...doc.data() }))

  const {result } = await getDocument()
    const properties = await result

    return { props:  {properties: properties as IEstateData[]}  };
  } catch (error) {
    console.log('Error fetching document:', error);
    return { props:  {properties: data1}  };
  }


 
}












