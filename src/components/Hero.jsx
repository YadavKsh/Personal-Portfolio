import "./Hero.module.css";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,I am Kshitij</h1>
        <p className={styles.description}>
I&apos;m a passionate web developer with expertise in HTML, CSS, JavaScript, ReactJS, and MongoDB. I enjoy creating dynamic and user-friendly websites that showcase my skills and projects. With a background in both technical and creative fields, I&apos;m dedicated to continuous learning and delivering high-quality digital experiences.
        </p>
        <a href="mailto:kshitijy112@gmail.com" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <img
        src={"Hero/working.jpg"}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
