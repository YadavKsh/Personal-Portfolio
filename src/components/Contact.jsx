import "./Contact.module.css";
import styles from "../components/Contact.module.css"

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
    <div className={styles.text}>
      <h2>Contact</h2>
      <p>Feel free to reach out!</p>
      <p>7999539685</p>
      
    </div>
    <ul className={styles.links}>
      <li className={styles.link}>
        <img src={"Contact/emailIcon.png"} alt="Email icon" />
        <a href="mailto:kshitijy112@gmail.com">kshitijy112@gmail.com</a>
      </li>
      <li className={styles.link}>
        <img
          src={"Contact/linkedinIcon.png"}
          alt="LinkedIn icon"
        />
        <a href="https://www.linkedin.com/in/kshitijyadav21/">LinkedIn</a>
      </li>
      <li className={styles.link}>
        <img src={"Contact/githubIcon.png"} alt="Github icon" />
        <a href="https://github.com/YadavKsh">github</a>
      </li>
     
    </ul>
  </footer>
  )
}

export default Contact
