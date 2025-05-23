import { ExternalLink } from "lucide-react"
import styles from "./projects.module.css"

const projects = [
  {
    title: "Gen edu",
    description: "AI Agent application to explain material to student based from what do they want.",
    image: "/gen-edu.jpg", 
    technologies: ["Node.js", "Next.js", "MongoDB", "Tailwind CSS", "React", "Typescript", "Shadcn"],
    link: "https://github.com/ghifari-15/Gen-edu",
  },
  {
    title: "Autoverse",
    description: "Automobile marketplace for buying and selling cars.", 
    image: "/autoverse.jpg",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    link: "https://github.com/ghifari-15/Veron-ai",
  },
  {
    title: "Veron AI",
    description: "Plateforme de conversion entre monnaies traditionnelles et cryptomonnaies.",
    image: "/veronai.png",
    technologies: ["Node.js", "Next.js", "QWEN LLM", "MongoDB", "Tailwind CSS", "React", "Typescript"],
    link: "https://github.com/ghifari-15/Veron-ai",
  },
  {
    title: "Diabetes Detection using K Neaarest Neighbors",
    description: "A machine learning project to detect diabetes using K Nearest Neighbors algorithm.",
    image: "/diabetes.png",
    technologies: ["Python", "Matplotlib", "Scikir-learn", "Pandas"],
    link: "https://github.com/ghifari-15/diabetes-prediction-using-knn",
  },
]

export default function Projects() {
  return (
    <section id="projets" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <img src={project.image || "/placeholder.svg"} alt={project.title} className={styles.projectImage} />
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTech}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  Visit the project <ExternalLink className={styles.iconSmall} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
