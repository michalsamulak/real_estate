import { useState } from "react";
import { CardsWrapper } from "@/components/PropertyCards/CardsWrapper";
import { PropertyCard } from "@/components/PropertyCards/PropertyCard";
import { PageWrapper } from "@/components/PageWrapper";
import styles from "@/styles/Cards.module.scss";
import data from "@/data/staticData.json";
import { IEstateData } from "@/types/estateTypes";


// SSG
// getStaticProps
// SSR
// getServerSideProps

const Buy = () => {
    const [items, setItems] = useState<IEstateData[]>(data);
    const [visibleItems, setVisibleItems] = useState<IEstateData[]>(items.slice(0, 6));

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
