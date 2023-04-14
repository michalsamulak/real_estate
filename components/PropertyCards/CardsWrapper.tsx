import styles from "./styles.module.scss";

export const CardsWrapper = ({ children }: any) => {
    return (
        <div className={styles.container}>
            <div className={styles.cards}>{children}</div>
        </div>
    );
};
