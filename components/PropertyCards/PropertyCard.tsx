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
import Link from "next/link";

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
                <div className={styles.img_overlay}>
                    <Image 
                    
                    src={imgSrc} width={100} height={200} alt="" 
                    unoptimized={true}
                    
                    />
                    <div className={styles.overlay}>
                      <Link href={'#'} className={styles.a}>
                            view property
                      </Link>
                      </div>
                    <div className={styles.cont}>
                        <div className={styles.icons_img}></div>
                    </div>
                </div>
                <h2 className={styles.title}>{title}</h2>
            </div>
            <div className={styles.card_content}>
                <p>{description}</p>

                <section className={styles.icons_home}>
                    <div className={styles.name_icon}>
                        <span>bedrooms</span>
                        <div className={styles.icon}>
                            <FontAwesomeIcon
                                icon={faBed}
                                style={{ fontSize: 13, color: "gray" }}
                            />
                            <span className={styles.qty}>{bedrooms}</span>
                        </div>
                    </div>
                    <div className={styles.name_icon}>
                        <span>bathrooms</span>
                        <div className={styles.icon}>
                            <FontAwesomeIcon
                                icon={faSink}
                                style={{ fontSize: 13, color: "gray" }}
                            />
                            <span className={styles.qty}>{bathrooms}</span>
                        </div>
                    </div>
                    <div className={styles.name_icon}>
                        <span>area</span>
                        <div className={styles.icon}>
                            <FontAwesomeIcon
                                icon={faVectorSquare}
                                style={{ fontSize: 13, color: "gray" }}
                            />
                            <span className={styles.qty}>{area}</span>
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
