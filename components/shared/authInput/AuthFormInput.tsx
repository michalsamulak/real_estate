import { ErrorMessage, Field } from "formik";
import styles from "./styles.module.scss";

type IFormInput = {
    label: string;
    name: string;
    type: string;
};

export const AuthFormInput = ({ label, name, type }: IFormInput) => {
    return (
        <div className={styles.inputWrapper}>
            <label htmlFor={name} className={styles.form_label}></label>
            <Field
                placeholder={label}
                type={type}
                id={name}
                name={name}
                className={styles.input}
            />
            <ErrorMessage
                name={name}
                component="div"
                className={styles.error}
            />
        </div>
    );
};
