import { ref } from "vue"
import {
  MenuIcon,
  XIcon,
  GithubIcon,
  LinkedinIcon,
  ExternalLinkIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
} from "lucide-vue-next"

// Navigation
const isMenuOpen = ref(false)
const navItems = [
  { name: "Accueil", href: "#hero" },
  { name: "Compétences", href: "#competences" },
  { name: "Expériences", href: "#experiences" },
  { name: "Projets", href: "#projets" },
  { name: "Formation", href: "#formation" },
  { name: "Contact", href: "#contact" },
]

// Skills
const skills = {
  languages: ["JavaScript", "PHP", "HTML", "CSS", "SCSS"],
  frameworks: ["Vue.js", "Node.js", "Symfony", "React", "Bootstrap"],
  databases: ["MySQL", "PostgreSQL", "MongoDB"],
  projectManagement: ["Trello", "Notion", "Scrum", "Kanban", "Slack"],
  devops: ["Docker", "Kubernetes", "Gestion des accès", "Sécurisation des applications web"],
  others: ["Git", "GitHub", "Windows", "Linux", "IOS", "WordPress", "PrestaShop"],
}

// Experiences
const experiences = [
  {
    role: "Développeur Web - Assistant Chef de projet - Support Technique",
    company: "Carrefour",
    location: "Lyon",
    period: "Avril 2024 - AUJOURD'HUI - ALTERNANCE",
    tasks: [
      "Développement et mise en place d'une application de gestion.",
      "Automatisation et optimisation des tâches.",
      "Analyse des besoins, gestion des produits et proposition de solutions innovantes.",
    ],
    tools: "Node.js, Vue.js, MongoDB, VBA, Html, Css...",
  },
  {
    role: "Développeur Web",
    company: "AtooSurf",
    location: "Paris",
    period: "2022 - 2023 - ALTERNANCE",
    tasks: [
      "Création d'Application Web (hébergement, logo, référencement...).",
      "Gestion de Projet.",
      "Relation Client - Formation (Suivi et Accompagnement du client).",
      "Création de contenu (Figma, Envato).",
    ],
    tools: "PHP, Wordpress, PrestaShop, MySql, JS, Trello, Html, Css...",
  },
  {
    role: "Développeur Web Junior",
    company: "Deltrax Africa",
    location: "Dakar",
    period: "Août 2021 - Octobre 2021 - STAGE",
    tasks: [
      "Initialisation a la Cryptomonnaie.",
      "Refonte du site web de l'entreprise.",
      "Mise en place d'une plateforme de conversion : Monnaie <=> Crypto.",
    ],
    tools: "Js, Api Crypto, Api Devise",
  },
]

// Projects (example projects - replace with actual projects)
const projects = [
  {
    title: "Application de Gestion Carrefour",
    description: "Application web pour la gestion interne des produits et l'automatisation des tâches.",
    image: "/projet-carrefour.jpg", // Remplacez le placeholder par votre nouvelle image
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Plateforme E-commerce",
    description: "Site e-commerce complet avec gestion des produits, panier et paiement en ligne.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["PHP", "Symfony", "MySQL", "Bootstrap"],
    link: "#",
  },
  {
    title: "Convertisseur Crypto",
    description: "Plateforme de conversion entre monnaies traditionnelles et cryptomonnaies.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["JavaScript", "API Crypto", "API Devise"],
    link: "#",
  },
]

// Education
const education = [
  {
    degree: "Bac+5 Chef de projet web et cybersécurité (Alternance)",
    school: "Cloud Campus",
    location: "Paris",
    period: "Mars 2024 - Mars 2025",
  },
  {
    degree: "Bac+4 Développeur Web Full Stack (Alternance)",
    school: "Cloud Campus",
    location: "Paris",
    period: "Octobre 2022 - Novembre 2023",
  },
  {
    degree: "Formation en Développeur Web (100% en ligne)",
    school: "OpenClassroom",
    period: "Février 2022 - Juin 2022",
  },
  {
    degree: "Licence informatique option Génie Logiciel",
    school: "Université Dakar Bourguiba",
    location: "Dakar",
    period: "Octobre 2018 - Juillet 2021",
  },
]

// Contact form
const contactForm = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
})

const submitForm = () => {
  // Here you would typically send the form data to a backend
  console.log("Form submitted:", contactForm.value)
  // Reset form after submission
  contactForm.value = {
    name: "",
    email: "",
    subject: "",
    message: "",
  }
  // Show success message (in a real app)
  alert("Message envoyé avec succès!")
}
