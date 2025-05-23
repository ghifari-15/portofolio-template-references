import styles from "./skills.module.css"

const skills = {
  languages: ["JavaScript", "PHP", "HTML", "CSS", "Python", "Typescript"],
  frameworks: ["Laravel", "Node.js", "React", "Bootstrap"],
  databases: ["MySQL", "MongoDB"],
  projectManagement: ["Trello", "Notion", "Scrum", "Kanban", "Slack"],
  devops: ["Docker", "Kubernetes", "Gestion des accès", "Sécurisation des applications web"],
  others: ["Git", "GitHub", "Windows", "Linux"],
}

export default function Skills() {
  return (
    <section id="competences" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <h3 className={styles.skillTitle}>Programming Languages</h3>
            <div className={styles.skillTags}>
              {skills.languages.map((skill, index) => (
                <span key={index} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.skillCard}>
            <h3 className={styles.skillTitle}>Frameworks</h3>
            <div className={styles.skillTags}>
              {skills.frameworks.map((skill, index) => (
                <span key={index} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.skillCard}>
            <h3 className={styles.skillTitle}>Databases</h3>
            <div className={styles.skillTags}>
              {skills.databases.map((skill, index) => (
                <span key={index} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className={styles.skillCard}>
            <h3 className={styles.skillTitle}>Outers</h3>
            <div className={styles.skillTags}>
              {skills.others.map((skill, index) => (
                <span key={index} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
