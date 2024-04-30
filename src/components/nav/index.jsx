import styles from "./nav.module.css";

const Navbar = () => {
  return (
    <div className="navbar__global h-[88px] bg-transparent xl:max-w-[1440px] flex justify-between items-center  ">
      <div className="Logo">
        <div className="img w-[95%]">
          <img src="./assets/Logo.png" alt="Logo" />
        </div>
      </div>
      <div
        className={`${styles.navs}  xl:h-[48px] flex justify-between  items-center gap-[50px] bg-transparent`}
      >
        <ul className="lg:w-[494px] flex justify-between">
          <li className="">
            <a href="#" id={styles.active}>
              All Flight
            </a>
          </li>
          <li>
            <a href="#">Schedule</a>
          </li>
          <li>
            <a href="#">Passengers</a>
          </li>
          <li>
            <a href="#">Your Orders</a>
          </li>
        </ul>
        <button className="lg:w-[152px] bg-none px-[40px] py-[10px] border-[2px] rounded-[59px] text-base font-semibold ">
          Let`s Fly
        </button>
      </div>
    </div>
  );
};

export default Navbar;
