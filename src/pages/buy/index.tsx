import Head from "next/head";
import { CardsWrapper } from "../../components/PropertyCards/CardsWrapper";
import { PropertyCard } from "../../components/PropertyCards/PropertyCard";
import data from "../../data/staticData.json";
import { useState } from "react";
import { PageWrapper } from "@/components/PageWrapper";

// paginacje
// filtry
// sortowanie

// SSG
// getStaticProps
// SSR
// getServerSideProps

// getEstates 




const Buy = () => {
    return (
        <>
              <PageWrapper title="Buy dream property" />

            {/* PropertyCards data={data} */}

            <CardsWrapper>
                {data.map((record) => {
                    const {
                        id,
                        title,
                        img,
                        description,
                        bathrooms,
                        num_bedrooms,
                        area,
                        price,
                        localization,
                    } = record;
                    return (
                        <PropertyCard
                            key={id}
                            id={id}
                            img={img}
                            title={title}
                            description={description}
                            bathrooms={bathrooms}
                            bedrooms={num_bedrooms}
                            area={area}
                            price={price}
                        />
                    );
                })}
            </CardsWrapper>
        </>
    );
};

export default Buy;
