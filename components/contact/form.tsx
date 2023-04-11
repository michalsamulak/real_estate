import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';
import styles from '../contact/form.module.scss'

type IInitValues = {
    name: string;
    email: string,
    message: string,
}

const initialValues = {
  name: '',
  email: '',
  message: ''
};

// contact
  // Form
    // index.tsx
    // styles.modules.scss
  // Header
    // index.tsx
    // styles.modules.scss


const validationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your name'),
  email: Yup.string().email('Invalid email address').required('Please enter your email'),
  message: Yup.string().required('Please enter your message')
});
const notify = () => toast('Thank you for message');

const ContactForm = () => {


  const handleSubmit = (values: IInitValues) => {
    // notify()
    toast('Thank you for message')
  };

  return (
    <section className={styles["contact-form"]}>
      <div className={styles["section-content"]}>
        <h2 className={styles["form-title"]}>Send us a message</h2>
        <h3 className={styles["form-subtitle"]}>We will get back to you as soon as possible</h3>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              {/* components/shared */}
              {/* FormInput */}
              <div className={styles["form-group"]}>
                <label htmlFor="name" className={styles["form-label"]}>Your Name</label>
                <Field type="text" id="name" name="name" className={styles["form-input"]} />
                <ErrorMessage name="name" component="div" className={styles["error-message"]} />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="email" className={styles["form-label"]}>Your Email</label>
                <Field type="email" id="email" name="email" className={styles["form-input"]} />
                <ErrorMessage name="email" component="div" className={styles["error-message"]} />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="message" className={styles["form-label"]}>Your Message</label>
                <Field as="textarea" id="message" name="message" className={styles["form-textarea"]} />
                <ErrorMessage name="message" component="div" className={styles["error-message"]} />
              </div>
              <button type="submit" className={styles["form-submit"]} disabled={isSubmitting}>Send Message</button>
            </Form>
          )}
        </Formik>
      </div>
      <Toaster />
    </section>
  );
};

export default ContactForm;
