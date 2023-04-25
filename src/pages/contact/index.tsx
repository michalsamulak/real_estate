import SectionHeader from "@/components/contact/Header";
import ContactForm from "@/components/contact/Form";
import { PageWrapper } from "@/components/PageWrapper";
import styled from "../../styles/Contact.module.scss";


const Contact = () => {
    return (
        <>
              <PageWrapper title="Contact us" />

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
