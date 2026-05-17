import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import './Contact.css'

export default function Contact() {
  const API_URL = import.meta.env.VITE_API_URL

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    error: null
  })

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'ambikamishra9236@gmail.com',
      link: 'mailto:ambikamishra9236@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91-9219077025',
      link: 'tel:+919219077025'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Gorakhpur, Uttar Pradesh',
      link: '#'
    },
    {
      icon: '🔗',
      title: 'LinkedIn',
      value: 'ambikamishraa',
      link: 'https://www.linkedin.com/in/ambikamishraa/'
    }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setStatus({
      submitted: false,
      loading: true,
      error: null
    })

    try {
      await axios.post(
        `${API_URL}/api/contact`,
        formData
      )

      setStatus({
        submitted: true,
        loading: false,
        error: null
      })

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })

    } catch (error) {
      setStatus({
        submitted: false,
        loading: false,
        error:
          error.response?.data?.message ||
          'Failed to send message. Please try again.'
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <main className="contact">
      <section className="contact-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">
              Let's <span className="gradient-text">Connect</span>
            </h1>

            <p className="page-subtitle">
              Get in touch and let's create something amazing together
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">

            <motion.div
              className="contact-info-section"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="section-title">Get In Touch</h2>

              <p className="section-description">
                Have a question or want to work together? I'd love to hear from you!
              </p>

              <div className="contact-info-grid">
                {contactInfo.map((info, idx) => (
                  <motion.a
                    key={idx}
                    href={info.link}
                    className="contact-info-card"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <div className="contact-icon">
                      {info.icon}
                    </div>

                    <h3>{info.title}</h3>
                    <p>{info.value}</p>
                  </motion.a>
                ))}
              </div>

              <div className="social-section">
                <h3>Follow Me</h3>

                <div className="social-icons">

                  <motion.a
                    href="https://github.com/ambikamishra03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🐙
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/ambikamishraa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    💼
                  </motion.a>

                  <motion.a
                    href="https://leetcode.com/u/ambikamishra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    💻
                  </motion.a>

                  <motion.a
                    href="https://www.geeksforgeeks.org/profile/ambikamishra9236"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    📚
                  </motion.a>

                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-section"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                Send Me a Message
              </h2>

              {status.submitted && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✓ Message sent successfully!
                </motion.div>
              )}

              {status.error && (
                <motion.div
                  className="error-message"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✗ {status.error}
                </motion.div>
              )}

              <form
                onSubmit={handleSubmit}
                className="contact-form"
              >

                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="button-primary submit-btn"
                  disabled={status.loading}
                >
                  {status.loading ? 'Sending...' : 'Send Message'}
                </button>

              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  )
}