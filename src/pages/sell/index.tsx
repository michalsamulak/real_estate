import { Formik, Form } from "formik";

import styles from "@/styles/Sell.module.scss";

import addData from "../../lib/firebase/firebaseAddToDB";

import { PageWrapper } from "@/components/PageWrapper";
import { SellInput } from "@/components/shared/SellInput/SellInput";
import { TextareaInput } from "@/components/shared/SellInput/SellTextarea";
import { FormValues } from "@/types/sellFormTypes";
import { initialValues } from "@/utils/listingProperty/initialValues";
import { validationSchema } from "@/utils/listingProperty/validation";
import { useAuthContext } from "@/contexts/AuthContext";
import { generateId } from "@/utils/helpers/generateId";
import { formatPrice } from "@/utils/search/formatPrice";

const Sell = () => {
    const user = useAuthContext()
    const DB_TITLE = "properties";

    
    const handleSubmit = async (values: FormValues) => {
        const ID = generateId()

        const value = +values.price

       const submitForm = {...values, id: ID, price: formatPrice(value)}
 
       const { result, error } = await addData(DB_TITLE, ID, submitForm);
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
                            <p className={styles.title}>
                                List Your Property for Sale
                            </p>
                            <p className={styles.message}>
                                Provide us with the details of the property you
                                are selling.
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
                                label="description"
                            />
                            <SellInput
                                name="img"
                                placeholder="link to property image"
                                label="Picture URL"
                                type="url"
                            />
                            <div className={styles.flex}>

                            <SellInput
                                name="phone_number"
                                placeholder="phone number"
                                label="phone number"
                                type="tel"
                                />
                                <SellInput
                                name="email"
                                placeholder="email"
                                label="email"
                                type="email"
                            />
                                </div>
                            <SellInput
                                name="street"
                                placeholder="street "
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
