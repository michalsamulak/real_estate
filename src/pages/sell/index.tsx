import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from "@/styles/Sell.module.scss"


import addData from "../../lib/firebase/firebaseAddToDB";
// import dataset from "../../../data/staticData.json";

import { PageWrapper } from "@/components/PageWrapper";


interface FormValues {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  


const Sell = () => {

    const initialValues: FormValues = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
    
      const validationSchema = Yup.object({
        firstname: Yup.string().required('Required'),
        lastname: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
       
      });
    
      const handleSubmit = (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
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
        <Form className={styles.form}>
          <p className={styles.title}>Sell</p>
          <p className={styles.message}>Signup now and get full access to our app.</p>
          <div className={styles.flex}>
            <label>
              <Field type="text" name="firstname" placeholder="" className={styles.input} />
              <span>Firstname</span>
              <ErrorMessage name="firstname" />
            </label>

            <label>
              <Field type="text" name="lastname" placeholder="" className={styles.input} />
              <span>Lastname</span>
              <ErrorMessage name="lastname" />
            </label>
          </div>

          <label>
            <Field type="email" name="email" placeholder="" className={styles.input} />
            <span>Email</span>
            <ErrorMessage name="email" />
          </label>

          <label>
            <Field type="password" name="password" placeholder="" className={styles.input} />
            <span>Password</span>
            <ErrorMessage name="password" />
          </label>

          <label>
            <Field
              type="password"
              name="confirmPassword"
              placeholder=""
              className={styles.input}
            />
            <span>Confirm password</span>
            <ErrorMessage name="confirmPassword" />
          </label>

          <button type="submit" className={styles.submit} disabled={isSubmitting}>
            Submit
          </button>

          <p className={styles.signin}>
            Already have an account? <a href="#">Sign in</a>
          </p>
        </Form>
      )}
    </Formik>

          
            {/* <button onClick={handleForm}>clic</button> */}
        </div>
    );
};

export default Sell;
