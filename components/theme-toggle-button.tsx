'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/components/theme-provider' // Adjusted import path
import styles from './theme-toggle-button.module.css'

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className={styles.toggleButton}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <Moon className={styles.icon} />
      ) : (
        <Sun className={styles.icon} />
      )}
    </button>
  )
}
