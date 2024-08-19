import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Project</h1>
      <div className={styles.projectContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Lifeofkelvin/easy-Banking"
          h3="viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Lifeofkelvin/easy-Banking"
          h3="Fresh Burger"
          p="Hamburger Resturant"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Lifeofkelvin/easy-Banking"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Lifeofkelvin/easy-Banking"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
