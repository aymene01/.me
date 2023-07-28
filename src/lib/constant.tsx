import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const menuItems = [
  { id: 1, label: 'Home', target: 'home' },
  { id: 2, label: 'About', target: 'about' },
  { id: 3, label: 'Skills', target: 'skills' },
  { id: 4, label: 'Work', target: 'work' },
  { id: 5, label: 'Contact', target: 'contact' },
]

export const socialIcons = [
  {
    id: 1,
    href: 'https://www.linkedin.com/in/aymene-bousbia-3147b21a1/',
    label: 'Linkedin',
    icon: <FaLinkedin size={30} />,
    color: 'blue-600',
  },
  { id: 2, href: 'https://github.com/aymene01', label: 'Github', icon: <FaGithub size={30} />, color: 'black' },
]
