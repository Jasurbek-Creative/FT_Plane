import styles from "./container.module.css";

const Container = ({ children }) => {
  return (
    <div className={`${styles.container} text-green-500 `}>{children}</div>
  );
};

export default Container;
