import Head from "next/head";
import Image from "next/image";
// import initFirebase from '../../lib/firebase/firebase'
import styles from "@/styles/Home.module.css";
import { CardsWrapper } from "../../components/PropertyCards/CardsWrapper";
import { PropertyCard } from "../../components/PropertyCards/PropertyCard";
// import WriteToCloudFirestore from "../../components/cloudFirestore/Write";
import data from "../../data/staticData.json"
import { SearchBar } from "../../components/search/SearchBar";
import { SearchContext, useAuthContext } from "../../lib/context/context";
import { useContext, useEffect } from "react";
import { getRandomItems } from "../../lib/utils/helpers/randomArrayElements";

////////////////////

///////////////////

// initFirebase()

const numPropertiesOnHomePage = 6

export default function Home() {


    const {search, updateSearch} = useAuthContext()

    
    useEffect(()=> {
       const defaultDisplayProperties = getRandomItems(data, numPropertiesOnHomePage)

        updateSearch(defaultDisplayProperties)
    },[])

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
          {search && search.map((record, i) => {
            const {id, title, img, description, bathrooms, num_bedrooms, area, price, localization} = record
            
            return (
             <PropertyCard key={id} id={id} imgSrc={img} title={title} description={description} bathrooms={bathrooms} bedrooms={num_bedrooms} area={area} price={price} />
            )
          })}
          </CardsWrapper>

      
        </>
    );
}
