import { motion } from 'framer-motion'
import './Projects.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Stock Prediction System',
      description: 'Stock market price predictor using supervised machine learning with real-time data visualization.',
      technologies: ['Machine Learning', 'Flask API', 'React', 'Python'],
      image: '📈',
      link: '#',
      github: 'https://github.com/ambikamishra03',
      stats: { accuracy: '85%+', data: '1 Year Historical' },
      highlights: [
        'Predicts stock prices for next 10 days',
        'Analyzes historical price patterns',
        'Visualizes actual vs predicted curves'
      ]
    },
    {
      id: 2,
      title: 'AI Juniors Website',
      description: 'Full-featured website for AI learning platform teaching students to build projects with AI.',
      technologies: ['HTML', 'PHP', 'JavaScript', 'SQL'],
      image: '🤖',
      link: '#',
      github: 'https://github.com/ambikamishra03',
      stats: { pages: '10+', users: 'Growing' },
      highlights: [
        'Interactive learning modules',
        'Project-based curriculum',
        'Community engagement features'
      ]
    },
    {
      id: 3,
      title: 'Portfolio Management System',
      description: 'Advanced trading system managing 20+ products with optimization for high-frequency trading.',
      technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
      image: '💼',
      link: '#',
      github: 'https://github.com/ambikamishra03',
      stats: { products: '20+', latency: 'Low-latency' },
      highlights: [
        'Manages multiple trading strategies',
        'Real-time market analysis',
        'Scalable architecture'
      ]
    },
    {
      id: 4,
      title: 'Attendance Alert System',
      description: 'Smart system detecting discrepancies between entry records and leave applications.',
      technologies: ['Node.js', 'SQL', 'Express', 'Backend'],
      image: '⏰',
      link: '#',
      github: 'https://github.com/ambikamishra03',
      stats: { automation: '100%', records: 'All Dates' },
      highlights: [
        'Automated alert generation',
        'Data mismatch detection',
        'Monthly report generation'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="projects">
      <section className="projects-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">Featured <span className="gradient-text">Projects</span></h1>
            <p className="page-subtitle">A selection of projects showcasing my skills in full-stack development</p>
          </motion.div>
        </div>
      </section>

      <section className="projects-grid">
        <div className="container">
          <motion.div
            className="grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-image">
                  <div className="image-placeholder">{project.image}</div>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-stats">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="stat">
                        <span className="stat-key">{key}</span>
                        <span className="stat-value">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="project-highlights">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="highlight">
                        <span className="highlight-icon">✓</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="tech-stack">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.link} className="project-link">
                      View Project →
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                      GitHub →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="projects-cta">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Want to see more?</h2>
            <p>Check out my GitHub for additional projects and contributions</p>
            <a href="https://github.com/ambikamishra03" target="_blank" rel="noopener noreferrer" className="button-primary">
              Explore GitHub
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
