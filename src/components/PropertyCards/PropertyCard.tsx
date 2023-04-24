import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import {
    faVectorSquare,
    faSink,
    faBed,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";
import defaultImg from "@/../public/static/default_img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IEstateData } from "@/types/estateTypes";
import removeData from "@/lib/firebase/removeFromDB";

const detailsFields = ["bedrooms", "bathrooms", "area"];

export const PropertyCard = ({
    record,
    showDelete = false,
}: {
    record: IEstateData;
    showDelete?: boolean;
}) => {
    const [isDeleting, setIsDeleting] = useState(showDelete);
    const ID = record.id;
    const DB_TITLE = "properties";
    const router = useRouter();

    const deleteListingHandler = async () => {
        const { result, error } = await removeData(DB_TITLE, ID);
        router.reload();

        console.log(result);
        if (error) {
            return console.log(error);
        }
    };

    if (!record) {
        return <div>Loading...</div>;
    }

    const {
        id,
        title,
        img,
        description,
        bathrooms,
        num_bedrooms,
        area,
        price,
    } = record;

    return (
        <section className={styles.card}>
            {isDeleting && (
                <div onClick={deleteListingHandler} className={styles.remove}>
                    
                </div>
            )}
            <div>
                <Link href={`/buy/${id}`}>
                    <div className={styles.img_overlay}>
                        <Image
                            src={img || defaultImg}
                            width={300}
                            height={500}
                            alt={title}
                        />
                        <div className={styles.overlay}>
                            <span className={styles.a}>view property</span>
                        </div>
                        <div className={styles.cont}>
                            <div className={styles.icons_img}></div>
                        </div>
                    </div>
                </Link>
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
                                        ? num_bedrooms
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
