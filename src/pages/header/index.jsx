import Container from "../../components/container/Container";
import styles from "./header.module.css";
const Header = () => {
  return (
    <div>
      <Container>
        <p className={styles.container}>Salom</p>
        <p className="text-green-500">Hello world</p>
      </Container>
    </div>
  );
};

export default Header;
