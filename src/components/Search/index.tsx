import styles from "./styles.module.scss";
import { Formik, Form, Field } from "formik";
import { RangeSearch } from "../shared/SearchInputs/RangeSearch"
import { TextSearch } from "../shared/SearchInputs/TextSearch";
import {
    bedroomsRange,
    priceRange,
} from "../../utils/search/dropdownRanges";
import { formatPrice } from "../../utils/search/formatPrice";


import data from "../../data/staticData.json"

import { useAuthContext } from "../../contexts/AuthContext";
import { IInitSearch } from "../../utils/search/type";
import { filterData } from "../../utils/search/filterData";

export const initialSearch = {
    title: "",
    minPrice: 0,
    maxPrice: 0,
    minBedrooms: 0,
    maxBedrooms: 0,
};

// search -> SearchBar
// SearchBar -> index.tsx

export const SearchBar = () => {
    const { search, updateSearch } = useAuthContext();

    const handleSubmit = (
        values: IInitSearch,
        { resetForm }: { resetForm: () => void }
    ) => {
        const { title, minBedrooms, maxBedrooms, minPrice, maxPrice } = values;

        // yup
        if (
            (!title || title.length < 3) &&
            (minBedrooms > maxBedrooms || minPrice > maxPrice)
        )
            return;

        const propertyQuery = filterData(values, data);
        updateSearch(propertyQuery);

        resetForm();
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
