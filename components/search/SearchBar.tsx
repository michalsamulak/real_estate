import { useReducer, useState } from "react";
import styles from "./styles.module.scss";
import { Formik, Form, Field } from "formik";
import { RangeSearch } from "../shared/searchInputs/rangeSearch";
import { TextSearch } from "../shared/searchInputs/textSearch";
import {
    bedroomsRange,
    priceRange,
} from "../../lib/utils/search/dropdownRanges";
import { formatPrice } from "../../lib/utils/search/formatPrice";

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
}
export const SearchBar = () => {
    const handleSubmit = (values: IInitSearch) => {
      const {title, minBedrooms, maxBedrooms, minPrice, maxPrice} = values

      if(minBedrooms > maxBedrooms || minPrice > maxPrice) return alert('wow')




        console.log(values); // Send values to backend for processing
    }

    return (
        <div className={styles.container}>
            <Formik
                initialValues={initialSearch}
                onSubmit={handleSubmit}
            >
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
