import styles from "./education.module.css"

const education = [
  {
    degree: "Undergraduate Degree in Informatics",
    school: "Universitas Pembangunan Jaya",
    location: "South Tangerang",
    period: "Aug 2024 - Present",
  },
  {
    degree: "Vocational High School",
    school: "Bina Informatika Vocational High School",
    location: "South Tangerang",
    period: "Jul 2020 - Aug 2027",
  },
 
]

export default function Education() {
  return (
    <section id="formation" className={styles.education}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Ma Formation</h2>
        <div className={styles.educationList}>
          {education.map((edu, index) => (
            <div key={index} className={styles.educationCard}>
              <div className={styles.educationHeader}>
                <div>
                  <h3 className={styles.educationDegree}>{edu.degree}</h3>
                  <p className={styles.educationSchool}>
                    {edu.school}
                    {edu.location ? `, ${edu.location}` : ""}
                  </p>
                </div>
                <p className={styles.educationPeriod}>{edu.period}</p>
              </div>
              
            </div>
          ))}
        </div>

        <div className={styles.languages}>
          <h3 className={styles.languagesTitle}>Languages</h3>
          <div className={styles.languagesList}>
            <div className={styles.languageItem}>
              <span className={styles.languageName}>Bahasa Indonesia:</span>
              <span className={styles.languageLevel}>Native Speaker</span>
            </div>
            <div className={styles.languageItem}>
              <span className={styles.languageName}>English:</span>
              <span className={styles.languageLevel}>Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
