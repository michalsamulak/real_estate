import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "@/styles/Sell.module.scss";

import addData from "../../lib/firebase/firebaseAddToDB";
// import dataset from "../../../data/staticData.json";

import { PageWrapper } from "@/components/PageWrapper";
import { SellInput } from "@/components/shared/SellInput/SellInput";
import { TextareaInput } from "@/components/shared/SellInput/SellTextarea";

interface FormValues {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Sell = () => {
    const initialValues: FormValues = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const validationSchema = Yup.object({
        firstname: Yup.string().required("Required"),
        lastname: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().required("Required"),
    });

    const handleSubmit = (
        values: FormValues,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        // handle form submission
        console.log(values);
        setSubmitting(false);
    };

    /////////////////////////////////////////////

    const dbTitle = "properties";
    const handleForm = async () => {
        const data = {
            name: "John snow2",
            house: "Stark2",
        };
        const { result, error } = await addData(dbTitle, "resr", data);

        console.log(result);
        if (error) {
            return console.log(error);
        }
    };

    return (
        <div>
            <PageWrapper title="Sell your property" />

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <div className={styles.container}>

                    <Form className={styles.form}>
                        <p className={styles.title}>List Your Property for Sale</p>
                        <p className={styles.message}>
                            Provide us with the details of the property you are
                            selling.
                        </p>

                        <SellInput
                            name="title"
                            placeholder="title"
                            label="title"
                            />
                        <div className={styles.flex}>
                            <SellInput
                                name="num_bedrooms"
                                placeholder="bedrooms"
                                label="bedrooms"
                                type="number"
                                />
                            <SellInput
                                name="bathrooms"
                                placeholder="bathrooms"
                                label="bathrooms"
                                type="number"
                                />
                        </div>
                        <div className={styles.flex}>
                            <SellInput
                                name="area"
                                placeholder="area"
                                label="area"
                                type="number"
                                />
                            <SellInput
                                name="price"
                                placeholder="price"
                                label="price"
                                type="number"
                                />
                        </div>

                        <TextareaInput
                            name="description"
                            placeholder="description"
                            />
                        <SellInput
                            name="img"
                            placeholder="link to property image"
                            label="img"
                            type="url"
                            />
                        <SellInput
                            name="phone_number"
                            placeholder="phone number"
                            label="phone_number"
                            type="tel"
                            />
                        <SellInput
                            name="street"
                            placeholder="street address"
                            label="street"
                            />

                        <div className={styles.flex}>
                            <SellInput
                                name="city"
                                placeholder="city"
                                label="city"
                                />
                            <SellInput
                                name="state"
                                placeholder="state"
                                label="state"
                                />
                        </div>
                        <div className={styles.flex}>
                            <SellInput
                                name="zip"
                                placeholder="post code"
                                label="zip"
                                />
                            <SellInput
                                name="country"
                                placeholder="country"
                                label="country"
                                />
                        </div>

                        <button
                            type="submit"
                            className={styles.submit}
                            disabled={isSubmitting}
                            >
                            Submit
                        </button>

                      
                    </Form>
                </div>
                )}
            </Formik>

{/* <button onClick={handleForm}>clic</button> */}
        </div>
    );
};

export default Sell;
