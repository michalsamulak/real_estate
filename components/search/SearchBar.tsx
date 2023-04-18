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
import { IInitSearch } from "../../lib/utils/search/type";
import { filterData } from "../../lib/utils/search/filterData";

export const initialSearch = {
    title: "",
    minPrice: 0,
    maxPrice: 0,
    minBedrooms: 0,
    maxBedrooms: 0,
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

        const test = filterData(values, data);
        console.log(test);
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
