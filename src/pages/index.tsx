import { useState } from "react";
// import initFirebase from '../../lib/firebase/firebase'
import { CardsWrapper } from "@/components/PropertyCards/CardsWrapper";
import { PropertyCard } from "@/components/PropertyCards/PropertyCard";
// import WriteToCloudFirestore from "../../components/cloudFirestore/Write";
import data from "@/data/staticData.json"
import { SearchBar } from "@/components/Search";
import { getRandomItems } from "@/utils/helpers/randomArrayElements";
import { PageWrapper } from "@/components/PageWrapper";
import styles from "@/styles/Home.module.scss"; 
import { IEstateData } from "@/types/estateTypes";

////////////////////

///////////////////

// initFirebase()

const NUM_PROPERTIES_ON_HOME_PAGE = 6

export default function Home() {
    const defaultDisplayProperties = getRandomItems(data, NUM_PROPERTIES_ON_HOME_PAGE)
    const [searchItems, setSearchItems] = useState(defaultDisplayProperties)

 
    // PageWrapper | props - title

    return (
        <>
        <PageWrapper title={'Real Estate Agency - Your One Stop Shop for Buying and Selling Properties'}/>
            
            <main className={styles.main}>
                <h1 className={styles.h1}>Find Your Dream Home</h1>
            <SearchBar setSearchItems={setSearchItems}/>
            </main>
            <CardsWrapper>
          {searchItems && searchItems.map((record: IEstateData) => {
            const { id, num_bedrooms, img, ...restData } = record
            
            return (
             <PropertyCard key={id} record={record} />
            //  <PropertyCard key={id} id={id} img={img} bedrooms={num_bedrooms} {...restData} />
            )
          })}
          </CardsWrapper>

      
        </>
    );
}
