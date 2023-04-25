import Link from "next/link";
import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CardsWrapper } from "@/components/PropertyCards/CardsWrapper";
import { PropertyCard } from "@/components/PropertyCards/PropertyCard";
import { PageWrapper } from "@/components/PageWrapper";
import styles from "@/styles/InfoTag.module.scss";
import data from "@/data/staticData.json";
import { IEstateData } from "@/types/estateTypes";
import { useAuthContext } from "@/contexts/AuthContext";
import getDocument from "@/lib/firebase/getFromDB";



const Listed = ({
    properties,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { user } = useAuthContext();
    const [items, setItems] = useState<IEstateData[]>(properties);
    const [myListings, setMyListings] = useState<IEstateData[]>(
        [] as IEstateData[]
    );
    const router = useRouter()

      

    useEffect(() => {
        if (user === null) router.push('/', undefined, { shallow: true });
    }, [router, user])

    useEffect(() => {
        setMyListings(
            items.filter((record) => {
                if (user === null) return;
                return record.email === user.email;
            })
        );
    }, []);

    return (
        <>
            <PageWrapper title="My Listings" />
            {myListings.length === 0 ? (
                <div className={styles.wrapper}>
                    <h2 className={styles.info}>
                        Since you have not listed any properties yet, you have a
                        great opportunity to{" "}
                        <Link className={styles.link} href={"/sell"}>
                            showcase
                        </Link>{" "}
                        your unique properties and attract potential buyers.{" "}
                    </h2>
                </div>
            ) : (
                <CardsWrapper>
                    {myListings.map((record: IEstateData) => (
                        <PropertyCard
                            key={record.id}
                            record={record}
                            showDelete={true}
                        />
                    ))}
                </CardsWrapper>
            )}
        </>
    );
};

export default Listed;

export const getServerSideProps = async () => {

    try {
      
        const { result } = await getDocument();
        const properties = await result;

        return { props: { properties: properties as IEstateData[] } };
    } catch (error) {
        console.log("Error fetching document:", error);
        return { props: { properties: data } };
    }
}
