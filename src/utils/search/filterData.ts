import { IInitSearch } from "./type";
import { IEstateData } from "../../types/estateTypes";
import { isInRange } from "./isInRange";

export const filterData = (values: IInitSearch, data: IEstateData[]) => {
    const filtered = data.filter((record) => {



          const cost = record.price.toString()  
        const price = parseInt(cost.substring(1).replace(",", ""));
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