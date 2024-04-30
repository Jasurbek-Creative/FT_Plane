import Container from "../../components/container/Container";
import Navbar from "../../components/nav";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={`${styles.header}  xl:h-[760px]`}>
      <Container>
        <Navbar />
      </Container>
      <div className="bg-img relative ">
        <img
          src="./assets/bg-map.png"
          alt="Map-background"
          className={`${styles.bgMap} xl:h-[432.99] xl:w-[1200px] mx-auto `}
        />
        <img
          src="./assets/bg_Aviation.png"
          alt=""
          className="w-[850px] absolute top-[25px] left-[50%] translate-x-[-50%]"
        />

        <div className="header_main absolute top-[20px]">
          <img
            src="./assets/bg_AirPlane.png"
            alt="AirPlane"
            className="opacity-35	w-[85%] mx-auto"
          />
          <div className="header_text text-center text-white">
            <h1 className="text-5xl font-bold	 leading-[150%] tracking-wider ">
              Travel around the world
            </h1>
            <p className="font-thin text-xs opacity-70	">
              One of the advantages of being disorganized is that one is always
              having surprising discoveries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
