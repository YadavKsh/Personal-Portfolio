import "./About.module.css"
import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
      <img
        src={"About/aboutImage2.png"}
        alt="Me sitting with a laptop"
        className={styles.aboutImage}
      />
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={"About/cursorIcon.png"} alt="Cursor icon" />
          <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>
              I am a frontend developer with experience in building responsive
              and optimized sites
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={"About/serverIcon.png"} alt="Server icon" />
          <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
            <p>
              I have experience developing fast and optimised back-end systems
              and APIs
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={"About/uiIcon.png"} alt="UI icon" />
          <div className={styles.aboutItemText}>
            <h3>Software Developer</h3>
            <p>
            A dedicated software engineer with expertise in data structures and algorithms.
            Excited about contributing skills to innovative projects and connecting with like-minded professionals.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  )
}

export default About
