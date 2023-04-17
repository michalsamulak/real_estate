import { Field } from "formik";
import React from "react";

type ISelect = {
    name: string;
    options: number[];
};

export const RangeSearch = ({ name, options, ...rest }: ISelect) => {
    return (
        <>
            <label htmlFor={name}>
                <Field as="select" id={name} name={name} {...rest}>
                    <option value="">{name}</option>
                    {options.map((value) => (
                        <option key={value} value={value}>
                            {value}
                        </option>
                    ))}
                </Field>
            </label>
        </>
    );
};
