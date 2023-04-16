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



export const PropertyPage = ({property}: {property:IProperty}) => {


    return (
        <>
            <div className="container">
                <div className={styles.featured_property}>
                    <div className={styles.image}>
                        <Image src={img} width={700} height={500} alt="test" />
                    </div>
                    <div className={styles.text}>
                        <h2>Property Information</h2>
                        <p className={styles.details}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Omnis quae obcaecati doloribus distinctio,
                            aliquam vero? Molestias, amet, eveniet.
                        </p>
                        <ul className="property-list-details">
                            <li className="text-black">
                                Property:{" "}
                                <strong className="text-black">
                                    Marga Luxury Suite
                                </strong>
                            </li>
                            <li>
                                Room: <strong>2</strong>
                            </li>
                            <li>
                                Total Area: <strong>482 Square Feets</strong>
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
                                    555 555 555
                                </p>
                                <p>
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        style={{ fontSize: 13, color: "gray", paddingRight: '5px' }}
                                    />
                                    email
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
