import { motion } from 'framer-motion'
import './Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      icon: '💻',
      skills: ['C/C++', 'JavaScript', 'Python', 'PHP', 'HTML/CSS', 'SQL']
    },
    {
      category: 'Frontend',
      icon: '🎨',
      skills: ['React.js', 'Tailwind CSS', 'Material UI', 'Framer Motion', 'CSS Grid', 'Responsive Design']
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'RESTful APIs', 'Authentication']
    },
    {
      category: 'Tools & Platforms',
      icon: '🛠️',
      skills: ['Git/GitHub', 'VS Code', 'NPM', 'Docker', 'Postman', 'Linux']
    },
    {
      category: 'Specializations',
      icon: '🚀',
      skills: ['Full Stack Development', 'System Design', 'Machine Learning (Beginner)', 'Database Design']
    },
    {
      category: 'Soft Skills',
      icon: '🤝',
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Leadership', 'Time Management']
    }
  ]

  const proficiencies = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'MongoDB', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'CSS/Tailwind', level: 88 },
    { name: 'Python', level: 75 }
  ]

  const coursework = [
    'Data Structures & Algorithms',
    'Database Management System',
    'Operating System',
    'Computer Architecture',
    'Object-Oriented Programming',
    'Web Development',
    'System Design',
    'Machine Learning Basics'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <main className="skills">
      <section className="skills-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title">Technical <span className="gradient-text">Skills</span></h1>
            <p className="page-subtitle">Technologies and tools I work with to bring ideas to life</p>
          </motion.div>
        </div>
      </section>

      <section className="skills-categories">
        <div className="container">
          <motion.div
            className="categories-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                className="skill-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="skill-icon">{category.icon}</div>
                <h3>{category.category}</h3>
                <div className="skill-list">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="skill-item"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="proficiency-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Proficiency <span className="gradient-text">Levels</span>
          </motion.h2>

          <motion.div
            className="proficiency-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {proficiencies.map((prof, idx) => (
              <motion.div
                key={idx}
                className="proficiency-item"
                variants={itemVariants}
              >
                <div className="proficiency-header">
                  <span className="proficiency-name">{prof.name}</span>
                  <span className="proficiency-percentage">{prof.level}%</span>
                </div>
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${prof.level}%` }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="coursework-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Relevant <span className="gradient-text">Coursework</span>
          </motion.h2>

          <motion.div
            className="coursework-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coursework.map((course, idx) => (
              <motion.div
                key={idx}
                className="course-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <span className="course-icon">📚</span>
                <span className="course-name">{course}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="learning-section">
        <div className="container">
          <motion.div
            className="learning-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Always Learning</h2>
            <p>
              I believe in continuous learning and staying updated with the latest technologies. 
              Currently exploring advanced system design, cloud deployment, and AI/ML applications.
            </p>
            <div className="learning-links">
              <a href="https://leetcode.com/u/ambikamishra/" target="_blank" rel="noopener noreferrer">
                LeetCode Profile ↗
              </a>
              <a href="https://www.geeksforgeeks.org/profile/ambikamishra9236" target="_blank" rel="noopener noreferrer">
                GeeksforGeeks Profile ↗
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
