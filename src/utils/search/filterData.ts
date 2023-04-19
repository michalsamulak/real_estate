import { IInitSearch } from "./type";
import data from '../../data/staticData.json'
import { IEstateData } from "../../types/estateTypes";

export const filterData = (values: IInitSearch, data: IEstateData[]) => {
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

        // isInRange(price, { min: values.minPrice, max: values.maxPrice })
        if (
            values.minPrice &&
            values.maxPrice &&
            (price < values.minPrice || price > values.maxPrice)
        ) {
            return false;
        }

        // isInRange(price, { min: values.minPrice, max: values.maxPrice })
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