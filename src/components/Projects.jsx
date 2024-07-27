// import "./Project.module.css"
// import styles from "./Project.module.css";
// import projects from "../data/project";
// // import ProjectCard from "./ProjectCard";

// const Projects = () => {
//   return (
//     <section className={styles.container} id="projects">
//     <div className={styles.contain}>
//       <h2 className={styles.title}>Projects</h2>
//       <div className={styles.projects}>
//         {projects.map((project, id) => {
//           return (
//             <div key={id} className={styles.contain}>
//               <img
//                 src={project.imageSrc}
//                 alt={`image of ${project.title}`}
//                 className={styles.image}
//               />
//               <h3 className={styles.title}>{project.title}</h3>
//               <p className={styles.description}>{project.description}</p>
//               <ul className={styles.skills}>
//                 {project.skills.map((skill, id) => {
//                  return( <li key={id} className={styles.skill}>
//                     {skill}{" "}
//                   </li>);
//                 })}
//               </ul>
//               <div className={styles.links}>
//                 {/* <a href={project.demo} className={styles.link}>
//                   Demo
//                 </a> */}
//                 <br /> <br />
//                 <a href={project.source} className={styles.link}>
//                   Source
//                 </a>
//                 <br />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import "./Project.module.css";
import styles from "./Project.module.css";
import projects from "../data/project";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <div className={styles.contain}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
          {projects.map((project, id) => {
            return (
              <div key={id} className={styles.contain}>
                <img
                  src={project.imageSrc}
                  alt={`image of ${project.title}`}
                  className={styles.image}
                />
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <ul className={styles.skills}>
                  {project.skills.map((skill, id) => {
                    return (
                      <li key={id} className={styles.skill}>
                        {skill}
                      </li>
                    );
                  })}
                </ul>
                <div className={styles.links}>
                  {/* <a href={project.demo} className={styles.link}>
                    Demo
                  </a> */}
                  <br /> <br />
                  <a href={project.source} className={styles.link}>
                    Source
                  </a>
                  <br />
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.feedbackContainer}>
          <Link to="/form" className={styles.feedbackButton}>
            Feedback
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
