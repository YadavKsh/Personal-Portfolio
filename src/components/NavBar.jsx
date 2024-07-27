import "./NavBar.module.css"
import Styles from "./NavBar.module.css";

const NavBar = () => {

  return (
    <nav className={Styles.navbar}>
      <div href="/" className={Styles.title}>
        Portfolio
      </div>
      <div className={Styles.menu}>
        <div  className={Styles.menuItem}
        >
          <li>
            <a href="#Experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
