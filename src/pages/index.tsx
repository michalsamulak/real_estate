import Head from "next/head";
import Image from "next/image";
// import initFirebase from '../../lib/firebase/firebase'
import styles from "@/styles/Home.module.css";
// import WriteToCloudFirestore from "../../components/cloudFirestore/Write";

////////////////////

///////////////////

// initFirebase()

export default function Home() {
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
            </main>
    

      
        </>
    );
}
