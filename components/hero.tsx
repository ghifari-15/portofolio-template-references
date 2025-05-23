import { Github, Linkedin, Instagram } from "lucide-react"
import styles from "./hero.module.css"

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Gathan Ghifari Rachwiyono</h1>
            <h2 className={styles.heroSubtitle}>Web & AI/ML Developer</h2>
            <div className={styles.contactInfo}>
              <p>19th years old - Student</p>
              <p>
                <a href="mailto:juniorclass356@gmail.com">gathan.ghifarirachwiyono@student.upj.ac.id</a>
              </p>
              <div className={styles.socialLinks}>
                <a href="https://github.com/ghifari-15" target="_blank" rel="noopener noreferrer">
                  <Github className={styles.icon} />
                </a>
                <a href="https://www.linkedin.com/in/gathan-ghifari-rachwiyono-695515282/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className={styles.icon} />
                </a>
                <a href="https://www.instagram.com/g_ghvr/" target="_blank" rel="noopener noreferrer">
                  <Instagram className={styles.icon} />
                </a>
              </div>
            </div>
            <p className={styles.heroDescription}>
              A passionate and dedicated student with a strong interest in web development and AI/ML. 
              I am eager to learn and grow in these fields, and I am excited to take on new challenges.
            </p>
      
          </div>
          <div className={styles.heroImage}>
            <div className={styles.profileImage}>
              <img src="/personal-photo.jpeg" alt="Gathan Ghifari Rachwiyono" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
