import { Field, FieldProps, ErrorMessage } from "formik";
import { ChangeEvent, useState } from "react";
import styles from "./styles.module.scss";

type IUploadProps = {
  name: string;
  handler: () => void;
  uplander: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const UploadInput = ({ name, handler, uplander }: IUploadProps) => {
  const [actionCompleted, setActionCompleted] = useState(false);
  const actionHandler = () => {
    handler();
    setActionCompleted((prev) => !prev);
  };

  return (
    <label>
      <Field name={name}>
        {({ field }: FieldProps) => (
          <div className={styles.input}>
            <input
              disabled={actionCompleted}
              type="file"
              onChange={(e) => uplander(e)}
            ></input>
            <button
              type="button"
              disabled={actionCompleted}
              onClick={actionHandler}
            >
              {" "}
              Upload Image
            </button>
            <ErrorMessage name={name} />
          </div>
        )}
      </Field>
    </label>
  );
};
