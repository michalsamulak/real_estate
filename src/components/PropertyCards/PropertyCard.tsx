import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";
import defaultImg from "@/../public/static/default_img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faVectorSquare,
    faSink,
    faBed,
} from "@fortawesome/free-solid-svg-icons";
import { IPropertyCardProps } from "./types";

const detailsFields = ["bedrooms", "bathrooms", "area"];

export const PropertyCard = ({
    img,
    title,
    description,
    bedrooms,
    bathrooms,
    area,
    price,
    id,
}: IPropertyCardProps) => {
    const displayImg = img.length > 0 ? img : defaultImg;

    return (
        <section className={styles.card}>
            <div>
                <div className={styles.img_overlay}>
                    <Image src={img} width={300} height={500} alt={title} />
                    <div className={styles.overlay}>
                        <Link href={`/buy/${id}`} className={styles.a}>
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
                <p>{description.slice(0, 80)}...</p>

                <div className={styles.icons_home}>
                    {detailsFields.map((item) => (
                        <div className={styles.name_icon} key={item}>
                            <span>{item}</span>
                            <div className={styles.icon}>
                                <FontAwesomeIcon
                                    icon={
                                        item === "bedrooms"
                                            ? faBed
                                            : item === "bathrooms"
                                            ? faSink
                                            : faVectorSquare
                                    }
                                    style={{ fontSize: 13, color: "gray" }}
                                />
                                <span className={styles.qty}>
                                    {item === "bedrooms"
                                        ? bedrooms
                                        : item === "bathrooms"
                                        ? bathrooms
                                        : `${area}m²`}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.price}>
                    <span>{price}</span>
                </div>
            </div>
        </section>
    );
};

{
    /* PropertyCardIcon */
}
{
    /* <div className={styles.name_icon}>
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
        <span className={styles.qty}>{area}m&sup2;</span>
    </div>
</div> */
}
