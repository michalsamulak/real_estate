import React from "react";
import Head from "next/head";

// import SectionHeader from "../../components/contact/Header";
import SectionHeader from "../../components/contact/Header";

// import ContactForm from "../../../components/contact/Form"; index.tsx
import ContactForm from "../../components/contact/Form";
import styled from "../../styles/Contact.module.scss";

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>
            <div className={styled.contact__container}>
                <div className={styled.contact__wrapper}>
                    <SectionHeader />
                    <ContactForm />
                </div>
            </div>
        </>
    );
};

export default Contact;
