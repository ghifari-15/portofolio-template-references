import { Github, Instagram, Linkedin } from "lucide-react"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.copyright}>
            <p>&copy; {new Date().getFullYear()} Gathan Ghifari Rachwiyono.</p>
          </div>
          <div className={styles.footerSocial}>
            <a href="https://github.com/AlbajuniorPortoFolio" target="_blank" rel="noopener noreferrer">
              <Github className={styles.iconSmall} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Linkedin className={styles.iconSmall} />
            </a>
            <a href="https://www.instagram.com/g_ghvr/" target="_blank" rel="noopener noreferrer">
                  <Instagram className={styles.icon} />
                </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
