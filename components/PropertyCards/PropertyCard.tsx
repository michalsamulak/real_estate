import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import defaultImg from "../../public/static/default_img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faVectorSquare,
    faSink,
    faBed,
    faUsd,
} from "@fortawesome/free-solid-svg-icons";

type IPropertyCardProps = {
    imgSrc: string;
    title: string;
    description: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    price: string;
};

export const PropertyCard = ({
    imgSrc,
    title,
    description,
    bedrooms,
    bathrooms,
    area,
    price,
}: IPropertyCardProps) => {
    return (
        <section className={styles.card}>
            <div>
                <div className={styles["img-overlay"]}>
                    <Image src={defaultImg} width={100} height={200} alt="" />
                    <div className={styles.overlay}>
                        <a className={styles.a} href="#">
                            view property
                        </a>
                    </div>
                    <div className={styles.cont}>
                        <div className={styles["icons-img"]}></div>
                    </div>
                </div>
                <h2>{title}</h2>
            </div>
            <div className={styles["card-content"]}>
                <p>{description}</p>

                <section className={styles["icons-home"]}>
                    <div className={styles["name-icon"]}>
                        <span>bedrooms</span>
                        <div className={styles.icon}>
                            <FontAwesomeIcon
                                icon={faBed}
                                style={{ fontSize: 13, color: "gray" }}
                            />
                            <span>{bedrooms}</span>
                        </div>
                    </div>
                    <div className={styles["name-icon"]}>
                        <span>bathrooms</span>
                        <div className={styles.icon}>
                            <FontAwesomeIcon
                                icon={faSink}
                                style={{ fontSize: 13, color: "gray" }}
                            />
                            <span>{bathrooms}</span>
                        </div>
                    </div>
                    <div className={styles["name-icon"]}>
                        <span>area</span>
                        <div className={styles.icon}>
                            <FontAwesomeIcon
                                icon={faVectorSquare}
                                style={{ fontSize: 13, color: "gray" }}
                            />
                            <span>{area}</span>
                        </div>
                    </div>
                </section>
                <section className={styles.price}>
                    <span>for sale</span>
                    <br />

                    <span>
                        {" "}
                        <FontAwesomeIcon
                            icon={faUsd}
                            style={{ fontSize: 16, color: "#252525" }}
                        />{" "}
                        {price}
                    </span>
                </section>
            </div>
        </section>
    );
};
