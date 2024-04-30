import PropTypes from "prop-types";

import styles from "./container.module.css";

const Container = ({ children }) => {
  return (
    <div
      className={`${styles.container}  xxl:px-[120px] xl:px-[100px] xl:max-w-[1440px] mx-auto`}
    >
      {children}
    </div>
  );
};

// Bu kodni chatgpt orqali oldim
Container.propTypes = {
  children: PropTypes.node.isRequired, // children ni aniq belgilash
};

export default Container;
