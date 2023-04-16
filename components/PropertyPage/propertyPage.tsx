import React from "react";
import styles from "./Property.module.scss";
import img from "../../public/static/default_img.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { IProperty } from "./types";



export const PropertyPage = ({property}: {property: IProperty}) => {

    return (
        <>
            <div className="container">
                <div className={styles.featured_property}>
                    <div className={styles.image}>
                        <Image src={property.img} width={700} height={500} alt="test" />
                    </div>
                    <div className={styles.text}>
                        <h2>Property Information</h2>
                        <p className={styles.details}>
                            {property.description}
                        </p>
                        <ul className="property-list-details">
                            <li className="text-black">
                                Property:{" "}
                                <strong className="text-black">
                                   {property.title}
                                </strong>
                            </li>
                            <li>
                                Room: <strong>{property.num_bedrooms}</strong>
                            </li>
                            <li>
                                Total Area: <strong>{property.area}m&sup2;</strong>
                            </li>
                            <li>
                                Category: <strong>Modern House</strong>
                            </li>
                            <li>
                                Lunch Date: <strong>Jan 20, 2019</strong>
                            </li>
                        </ul>
                        <div className={styles.contact_wrapper}>
                            <p className={styles.contact}>Details:</p>
                            <div>
                                <p>
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        style={{ fontSize: 13, color: "gray", paddingRight: '5px' }}
                                    />
                                    {property.phone_number}
                                </p>
                                <p>
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        style={{ fontSize: 13, color: "gray", paddingRight: '5px', marginTop: '10px' }}
                                    />
                                    {property.email}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
