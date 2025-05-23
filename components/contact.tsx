"use client"

import type React from "react"

import { useState } from "react"
import styles from "./contact.module.css"

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", contactForm)
    // Reset form after submission
    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message (in a real app)
    alert("Message envoyé avec succès!")
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Contact me</h2>
        <div className={styles.contactContainer}>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={contactForm.name} onChange={handleChange} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={contactForm.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={contactForm.message}
                onChange={handleChange}
                rows={5}
                required
              ></textarea>
            </div>
            <div className={styles.formGroup}>
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </div>
          </form>

      
        </div>
      </div>
    </section>
  )
}
