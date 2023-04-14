import React from 'react';
import styles from './styles.module.scss';

type IPropertyCardProps = {
  imgSrc: string;
  title: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  price: string;
}

export const PropertyCard = ({ imgSrc, title, description, bedrooms, bathrooms, area, price }: IPropertyCardProps) => {
  return (
    <div className={styles.container}>
    <div className={styles.cards}>
    <section className={styles.card}>
      <div>
        <div className={styles['img-overlay']}><img src={imgSrc} alt={title} />
          <div className={styles.overlay}><a className={styles.a} href="#">view property</a></div>
          <div className={styles.cont}>
            <div className={styles['icons-img']}>
              {/* <button><i className="fas fa-heart"></i></button>
              <button><i className="fas fa-share"></i></button> */}
            </div>
          </div>
        </div>
        <h2>{title}</h2>
      </div>
      <div className={styles['card-content']}>
        <p>{description}</p>

        <section className={styles['icons-home']}>
          <div className={styles['name-icon']}>
            <span>bedrooms</span>
            <div className={styles.icon}>
              {/* <i className="fas fa-bed"></i> */}
              <span>{bedrooms}</span>
            </div>
          </div>
          <div className={styles['name-icon']}>
            <span>bathrooms</span>
            <div className={styles.icon}>
              {/* <i className="fas fa-sink"></i> */}
              <span>{bathrooms}</span>
            </div>
          </div>
          <div className={styles['name-icon']}>
            <span>area</span>
            <div className={styles.icon}>
              {/* <i className="fas fa-vector-square"></i> */}
              <span>{area}</span>
            </div>
          </div>
        </section>
        <section className={styles.price}>
          <span>for sale</span><br />
          <span>{price}</span>
        </section>
      </div>
    </section>
    </div></div>
  );
}


