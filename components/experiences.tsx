import styles from "./experiences.module.css"

const experiences = [
  {
    role: "Critical Monitoring",
    company: "Velo Networks (PT Nettocyber Indonesia)",
    location: "Jakarta",
    period: "Sep 2022 - Nov 22  - Intern",
    tasks: [
      "Reporting anomaly problem client's internet with critical majority .",
      "Ticketing system for client.",
      
    ],
    tools: "Zabbix, Moratelindo, PRTG, Solarwinds, ...",
  },
  {
    role: "IT Contract",
    company: "Al-lauzah Islamic School",
    location: "South Tangerang",
    period: "Jan 2023 - Feb 2023 - Contract",
    tasks: [
      "Entrepreneurial program that called 'Project Work'.",
      "Very satisfied cummulative.",
      "Carried out in groups to meet company needs.",
    ],
    tools: "Mikrotik, Cisco, HTML, CSS",
  },
  {
    role: "Laboratory Assistant",
    company: "Informatics Majority, Pembangunan Jaya University",
    location: "South Tangerang",
    period: "Jan 2024 - Aug 2024 - On-site",
    tasks: [
      "Check and maintain every parts or inventory in laboratorium to ensure every items is good and ready to use for course in laboratorium.",
      "Responsible of lecturer assistant recruitement. ",
      "Redesign network system in computer laboratorium.",
      "Gave a knowledge about fundamental network to any member of Laboratorium Assistant."
    ],
    tools: "Computer Network, Mikrotik, Cisco, Netrowk Configuration, Technical Support",
  },
]

export default function Experiences() {
  return (
    <section id="experiences" className={styles.experiences}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>My Experiences</h2>
        <div className={styles.experienceList}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.experienceCard}>
              <div className={styles.experienceHeader}>
                <div>
                  <h3 className={styles.experienceRole}>{exp.role}</h3>
                  <p className={styles.experienceCompany}>
                    {exp.company}, {exp.location}
                  </p>
                </div>
                <p className={styles.experiencePeriod}>{exp.period}</p>
              </div>
              <ul className={styles.experienceTasks}>
                {exp.tasks.map((task, taskIndex) => (
                  <li key={taskIndex}>{task}</li>
                ))}
              </ul>
              <p className={styles.experienceTools}>
                <span className={styles.toolsLabel}>Outils:</span> {exp.tools}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
