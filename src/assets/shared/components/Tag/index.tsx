import styles from "./index.module.scss";

const Tag = (props) => {
    const { value } = props;
    return (
        <div className={styles["tag"]}>
            <div className={styles["tag__color"]}></div>
            <div className={styles["tag__name"]}>{value.tag_name}</div>
        </div>
    );
};
export default Tag;
