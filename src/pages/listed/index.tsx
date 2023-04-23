import { useEffect, useState } from "react";
import { CardsWrapper } from "@/components/PropertyCards/CardsWrapper";
import { PropertyCard } from "@/components/PropertyCards/PropertyCard";
import { PageWrapper } from "@/components/PageWrapper";
import styles from "@/styles/InfoTag.module.scss";
import data from "@/data/staticData.json";
import { IEstateData } from "@/types/estateTypes";
import { useAuthContext } from "@/contexts/AuthContext";
import Link from "next/link";

const Listed = () => {
    const { user } = useAuthContext();
    const [items, setItems] = useState<IEstateData[]>(data);
    const [myListings, setMyListings] = useState<IEstateData[]>(
        [] as IEstateData[]
    );

    useEffect(() => {
        setMyListings(
            items.filter((record) => {
                return record.email === ''// user?.email;
            })
        );
    }, []);

    return (
        <>
            <PageWrapper title="My Listings" />
            {myListings.length === 0 ? (
                <div className={styles.wrapper}><h2 className={styles.info}>
                    Since you have not listed any properties yet, you have a
                    great opportunity to{" "}
                    <Link className={styles.link} href={"/sell"}>
                        showcase
                    </Link>{" "}
                    your unique properties and attract potential buyers.{" "}
                </h2></div>
            ) : (
                <CardsWrapper>
                    {myListings.map((record: IEstateData) => (
                        <PropertyCard key={record.id} record={record} />
                    ))}
                </CardsWrapper>
            )}
        </>
    );
};

export default Listed;
