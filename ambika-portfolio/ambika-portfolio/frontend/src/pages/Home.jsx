import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const stats = [
    { label: 'Projects', value: '5+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Experience', value: 'CSE Student' },
  ]

  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content container">
          <motion.div
            className="hero-text"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="hero-title">
              Hi, I'm <span className="gradient-text">Ambika Mishra</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-subtitle">
              Full Stack Developer | Problem Solver | Tech Enthusiast
            </motion.p>

            <motion.p variants={itemVariants} className="hero-description">
              I create beautiful, scalable web applications using modern technologies. 
              With expertise in MERN stack, I transform ideas into robust digital solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-buttons">
              <Link to="/projects" className="button-primary">
                View My Work
              </Link>
              <Link to="/contact" className="button-secondary">
                Get In Touch
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat">
                  <span className="stat-value gradient-text">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="floating-card card-1">
              <div className="card-icon">💻</div>
              <p>Full Stack</p>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">⚡</div>
              <p>Fast & Scalable</p>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">🎨</div>
              <p>Modern Design</p>
            </div>
            <div className="hero-gradient"></div>
          </motion.div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="about-text">
              <h2 className="section-title">
                About <span className="gradient-text">Me</span>
              </h2>
              <p>
                I'm a Computer Science student at Madan Mohan Malaviya University of Technology with a passion for building 
                web applications. Currently pursuing MTech CSE with a strong foundation in full-stack development.
              </p>
              <p>
                My journey in tech started with curiosity about how things work, which evolved into creating things that matter. 
                I've worked with startups and have experience in both frontend and backend development, with a focus on writing 
                clean, maintainable code.
              </p>
              <p>
                When I'm not coding, you'll find me solving DSA problems, contributing to open-source, or exploring new technologies.
              </p>
              <div className="about-links">
                <a href="https://www.linkedin.com/in/ambikamishraa/" target="_blank" rel="noopener noreferrer">
                  LinkedIn ↗
                </a>
                <a href="https://github.com/ambikamishra03" target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
              </div>
            </div>
            <div className="about-highlight">
              <div className="highlight-box">
                <h3>MTech CSE</h3>
                <p>Madan Mohan Malaviya University</p>
                <p className="highlight-year">2027</p>
              </div>
              <div className="highlight-box">
                <h3>BTech CSE</h3>
                <p>Madan Mohan Malaviya University</p>
                <p className="highlight-year">2024</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to build something amazing?</h2>
            <p>Let's collaborate and create something extraordinary</p>
            <Link to="/contact" className="button-primary">
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
