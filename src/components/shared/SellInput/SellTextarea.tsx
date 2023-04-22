import { Field, ErrorMessage, FieldProps } from 'formik';
import styles from './styles.module.scss';

type ITextareaInputProps = {
  name: string;
  placeholder?: string;
  label?: string;
}

export const TextareaInput = ({ name, placeholder, label }: ITextareaInputProps) => (
  <label>
    <Field name={name}>
      {({ field }: FieldProps) => (
        <>
        <div>

          <textarea {...field} placeholder={placeholder} className={styles.textarea} />
        </div>
          {/* <span>{label}</span> */}
          <ErrorMessage name={name} />
        </>
      )}
    </Field>
  </label>
);