import React from 'react';
import styles from '../contact/header.module.scss'

function SectionHeader() {
  return (
    <section className={styles.section_header}>
      <div className={styles.section_content}>
        <h1 className={styles.section_title}>Contact Us</h1>
        <h2 className={styles.section_subtitle}>We would love to hear from you</h2>
        <div className={styles.contact_info}>
          <div className={styles.contact_info_item}>
            <i className={styles.contact_info_icon}></i>
            <p className={styles.contact_info_text}>123 Main Street<br />Anytown, USA</p>
          </div>
          <div className={styles.contact_info_item}>
            <i className={styles.contact_info_icon}></i>
            <p className={styles.contact_info_text}>(555) 555 5555</p>
          </div>
          <div className={styles.contact_info_item}>
            <i className={styles.contact_info_icon }></i>
            <p className={styles.contact_info_text}>info@myrealestatecompany.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHeader;
