import Image from "next/image";
import styles from "./styles.module.scss";
import { IProperty } from "./types";
import { PropertyDetails } from "./Details";
import { ContactInfo } from "./ContactInfo";
import { PageWrapper } from "../PageWrapper";
import defaultImg from "@/../public/static/default_img.jpg";

// PropertyDetails
export const PropertyPage = ({ property }: { property: IProperty }) => {
    const displayImg = property.img.length > 0 ? property.img : defaultImg;

    return (
        <>
            <PageWrapper title={property.title} />

            <div className={styles.featured_container}>
                <div className={styles.featured_property}>
                    <div className={styles.image}>
                        <Image
                            src={displayImg}
                            width={700}
                            height={500}
                            alt="test"
                        />
                    </div>
                    <div className={styles.text}>
                        <h2>Property Information</h2>
                        <p className={styles.details}>{property.description}</p>

                        <PropertyDetails property={property} />

                        <ContactInfo property={property} />

                        {/* <div className={styles.contact_wrapper}>
                            <p className={styles.contact}>Contact:</p>
                            <div>
                                <p>
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        style={{
                                            fontSize: 13,
                                            color: "gray",
                                            paddingRight: "5px",
                                        }}
                                    />

                                    {property.phone_number}
                                </p>
                                <p>
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        style={{
                                            fontSize: 13,
                                            color: "gray",
                                            paddingRight: "5px",
                                            marginTop: "10px",
                                        }}
                                    />

                                    {property.email}
                                </p>
                            </div>
                        </div> */}
                        <div className={styles.contact_wrapper}>
                            <p className={styles.contact}>Address:</p>
                            <div>
                                <p>{property.localization.street}</p>
                                <p>{property.localization.city}</p>
                                <p>{property.localization.zip}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

{
}
{
}
