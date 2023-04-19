import Head from "next/head";
import Image from "next/image";
// import initFirebase from '../../lib/firebase/firebase'
import styles from "@/styles/Home.module.scss"; // src/styles/ome.module.css
import { CardsWrapper } from "../components/PropertyCards/CardsWrapper";
import { PropertyCard } from "../components/PropertyCards/PropertyCard";
// import WriteToCloudFirestore from "../../components/cloudFirestore/Write";
import data from "../data/staticData.json"
import { SearchBar } from "../components/Search";
import { SearchContext, useAuthContext } from "../contexts/AuthContext";
import { useContext, useEffect } from "react";
import { getRandomItems } from "../utils/helpers/randomArrayElements";

////////////////////

///////////////////

// initFirebase()

const NUM_PROPERTIES_ON_HOME_PAGE = 6

export default function Home() {
    // useState

    const {search, updateSearch} = useAuthContext()

    
    useEffect(()=> {
       const defaultDisplayProperties = getRandomItems(data, NUM_PROPERTIES_ON_HOME_PAGE)

        updateSearch(defaultDisplayProperties)
        // eslint-disable-next-line
    }, [])

    // PageWrapper | props - title

    return (
        <>
            <Head>
                <title>
                    Real Estate Agency - Your One Stop Shop for Buying and
                    Selling Properties
                </title>

                <meta
                    name="description"
                    content="We are a real estate agency that helps clients buy and sell properties."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.h1}>Find Your Dream Home</h1>
            <SearchBar />
            </main>
            <CardsWrapper>
          {search && search.map((record: any) => {
            const { localization, id, num_bedrooms, img, ...restData } = record
            
            return (
             <PropertyCard key={id} id={id} imgSrc={img} bedrooms={num_bedrooms} {...restData} />
            )
          })}
          </CardsWrapper>

      
        </>
    );
}
