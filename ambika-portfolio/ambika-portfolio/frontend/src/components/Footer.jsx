import { motion } from 'framer-motion'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/ambikamishra03', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ambikamishraa/', icon: '💼' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/ambikamishra/', icon: '💻' },
    { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/profile/ambikamishra9236', icon: '📚' },
  ]

  return (
    <footer className="footer">
      <div className="footer-container container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="social-links">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.name}
                >
                  <span className="social-icon">{link.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>Email: <a href="mailto:ambikamishra9236@gmail.com">ambikamishra9236@gmail.com</a></p>
            <p>Phone: <a href="tel:+919219077025">+91-9219077025</a></p>
          </div>

          <div className="footer-section">
            <h3>Location</h3>
            <p>Gorakhpur, Uttar Pradesh</p>
            <p>India</p>
          </div>
        </motion.div>

        <motion.div
          className="footer-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        <div className="footer-bottom">
          <p>&copy; {currentYear} Ambika Mishra. All rights reserved.</p>
          <p>Designed & Built with ❤️ using MERN Stack</p>
        </div>
      </div>
    </footer>
  )
}
