import { useState } from "react";
import { CardsWrapper } from "@/components/PropertyCards/CardsWrapper";
import { PropertyCard } from "@/components/PropertyCards/PropertyCard";
import { PageWrapper } from "@/components/PageWrapper";
import styles from "@/styles/Cards.module.scss";
import data from "@/data/staticData.json";
import { IEstateData } from "@/types/estateTypes";
import { InferGetServerSidePropsType } from "next";
import getDocument from "@/lib/firebase/getFromDB";

const Buy = ({
    properties,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [items, setItems] = useState<IEstateData[]>(properties);
    const [visibleItems, setVisibleItems] = useState<IEstateData[]>(
        items.slice(0, 6)
    );

    const handleLoadMore = () => {
        setVisibleItems(items.slice(0, visibleItems.length + 6));
    };

    return (
        <>
            <PageWrapper title="Buy dream property" />

            <CardsWrapper>
                {visibleItems.map((record: IEstateData) => (
                    <PropertyCard key={record.id} record={record} />
                ))}
            </CardsWrapper>
            <button className={styles.btnMore} onClick={handleLoadMore}>
                Load More
            </button>
        </>
    );
};

export default Buy;

export async function getServerSideProps() {
    try {
        const { result } = await getDocument();
        const properties = await result;

        return { props: { properties: properties as IEstateData[] } };
    } catch (error) {
        console.log("Error fetching document:", error);
        return { props: { properties: data } };
    }
}
