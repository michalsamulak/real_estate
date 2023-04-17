import { Field } from "formik";
import React from "react";

type ISelect = {
    name: string;
    options: number[];
    formatPrice?: (price:number) => any
};

export const RangeSearch = ({ name, options, formatPrice, ...rest }: ISelect) => {
    return (
        <>
            <label htmlFor={name}>
                <Field as="select" id={name} name={name} {...rest}>
                    <option value="">{name}</option>
                    {options.map((value) => {
                        let range = value
                        if(formatPrice) {

                            range = formatPrice(value) 
                        }
                        return  (
                        <option  key={value} value={value}>
                            {range}
                        </option>
                    )})}
                </Field>
            </label>
        </>
    );
};
