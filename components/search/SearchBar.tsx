import { useReducer, useState } from "react";
import styles from "./styles.module.scss";
import { Formik, Form, Field } from "formik";
import { RangeSearch } from "../shared/searchInputs/rangeSearch";
import { TextSearch } from "../shared/searchInputs/textSearch";

export const SearchBar = () => {
    function handleSubmit(values: any) {
        console.log(values); // Send values to backend for processing
    }

    const bedroomsRange = [1, 2, 3, 4, 5, 6];
    const priceRange = [
        100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000,
        1000000, 1100000, 1200000, 1300000, 1400000, 1500000, 1600000, 1700000,
        1800000, 1900000, 2000000, 2500000, 3000000,
    ];

    return (
        <div className={styles.container}>
            <Formik
                initialValues={{
                    title: "",
                    minPrice: "",
                    maxPrice: "",
                    minBedrooms: "",
                    maxBedrooms: "",
                }}
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
                                    name={"Min Price"}
                                    options={priceRange}
                                />
                                <RangeSearch
                                    name={"Max Price"}
                                    options={priceRange}
                                />
                            </div>
                            <div className={styles.range}>
                                <RangeSearch
                                    name={"Min Bedrooms"}
                                    options={bedroomsRange}
                                />
                                <RangeSearch
                                    name={"Max Bedrooms"}
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
