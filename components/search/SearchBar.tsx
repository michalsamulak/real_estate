import { useContext, useReducer, useState } from "react";
import styles from "./styles.module.scss";
import { Formik, Form, Field } from "formik";
import { RangeSearch } from "../shared/searchInputs/rangeSearch";
import { TextSearch } from "../shared/searchInputs/textSearch";
import {
    bedroomsRange,
    priceRange,
} from "../../lib/utils/search/dropdownRanges";
import { formatPrice } from "../../lib/utils/search/formatPrice";
import DOMPurify from "dompurify";

import data from "../../data/staticData.json";

import { SearchContext, useAuthContext } from "../../lib/context/context";

export const initialSearch = {
    title: "",
    minPrice: 0,
    maxPrice: 0,
    minBedrooms: 0,
    maxBedrooms: 0,
};

type IInitSearch = {
    title: string;
    minPrice: number;
    maxPrice: number;
    minBedrooms: number;
    maxBedrooms: number;
};
export const SearchBar = () => {
    const { search, updateSearch } = useAuthContext();

    const handleSubmit = (values: IInitSearch) => {
        const { title, minBedrooms, maxBedrooms, minPrice, maxPrice } = values;

        if (
            (!title || title.length < 3) &&
            (minBedrooms > maxBedrooms || minPrice > maxPrice)
        )
            return;

        const searchTitle = DOMPurify.sanitize(title);

        const test = filterData(values);
        console.log(test);
    };

    const filterData = (values: IInitSearch) => {
        const filtered = data.filter((record) => {
            const price = parseInt(record.price.substring(1).replace(",", ""));
            const title = record.title.toLowerCase();
            const roomsNum = record.num_bedrooms;

            if (
                values.title.length > 3 &&
                !title.includes(values.title.toLowerCase())
            ) {
                return false;
            }

            if (
                values.minPrice &&
                values.maxPrice &&
                (price < values.minPrice || price > values.maxPrice)
            ) {
                return false;
            }

            if (
                values.minBedrooms &&
                values.maxBedrooms &&
                (roomsNum < values.minBedrooms || roomsNum > values.maxBedrooms)
            ) {
                return false;
            }

            return true;
        });

        return filtered;
    };

    return (
        <div className={styles.container}>
            <Formik initialValues={initialSearch} onSubmit={handleSubmit}>
                {(formik) => (
                    <Form>
                        <div className={styles.barWrapper}>
                            <TextSearch name={"title"} />
                            <button
                                type="submit"
                                disabled={!formik.dirty || !formik.isValid}
                            >
                                Search
                            </button>
                        </div>
                        <div className={styles.selectsWrapper}>
                            <div className={styles.range}>
                                <RangeSearch
                                    label={"Min Price"}
                                    name={"minPrice"}
                                    options={priceRange}
                                    formatPrice={formatPrice}
                                />
                                <RangeSearch
                                    label={"Max Price"}
                                    name={"maxPrice"}
                                    options={priceRange}
                                    formatPrice={formatPrice}
                                />
                            </div>
                            <div className={styles.range}>
                                <RangeSearch
                                    label={"Min Bedrooms"}
                                    name={"minBedrooms"}
                                    options={bedroomsRange}
                                />
                                <RangeSearch
                                    label={"Max Bedrooms"}
                                    name={"maxBedrooms"}
                                    options={bedroomsRange}
                                />
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
