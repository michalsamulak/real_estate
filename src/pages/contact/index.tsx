import React from "react";
import SectionHeader from "../../../components/contact/Header/header";
import ContactForm from "../../../components/contact/Form/form";
import styled from "../../styles/Contact.module.scss";

const Contact = () => {
    return (
        <div className={styled.contact__container}>
            <div className={styled.contact__wrapper}>
                <SectionHeader />
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
