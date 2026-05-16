# Ambika Mishra - Portfolio Website

A modern, responsive MERN stack portfolio website built with React, Node.js, Express, and MongoDB. This portfolio showcases projects, skills, and contact information with smooth animations and a professional design.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Built with Framer Motion animations and beautiful gradients
- **MERN Stack**: Full-stack application with React frontend and Node.js/Express backend
- **Contact Form**: Fully functional contact form with MongoDB integration
- **Projects Showcase**: Display your best projects with detailed information
- **Skills Section**: Organize skills by categories with proficiency levels
- **Dark Theme**: Modern dark theme with accent colors for better user experience
- **SEO Friendly**: Optimized for search engines with proper meta tags
- **Scalable Architecture**: Easy to customize and extend

## 📁 Project Structure

```
ambika-portfolio/
├── backend/
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contact.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── Navbar.css
    │   │   ├── Footer.jsx
    │   │   └── Footer.css
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Home.css
    │   │   ├── Projects.jsx
    │   │   ├── Projects.css
    │   │   ├── Skills.jsx
    │   │   ├── Skills.css
    │   │   ├── Contact.jsx
    │   │   └── Contact.css
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library
- **Axios** - HTTP client
- **Vite** - Build tool
- **CSS3** - Styling with CSS variables

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-Origin Resource Sharing

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud - MongoDB Atlas recommended)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
cd ambika-portfolio
```

### 2. Setup Backend

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update .env with your MongoDB URI
# MONGODB_URI=mongodb://localhost:27017/ambika-portfolio
# or
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ambika-portfolio

# Start the backend server
npm run dev
```

The backend will run on `http://localhost:5000`

### 3. Setup Frontend

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will run on `http://localhost:3000`

## 🗄️ MongoDB Setup

### Option 1: Local MongoDB
```bash
# Install MongoDB locally and run
mongod
```

### Option 2: MongoDB Atlas (Cloud)
1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a cluster
4. Get connection string
5. Update `.env` file with connection string

## 📝 Customization

### Add Your Projects
Edit `frontend/src/pages/Projects.jsx`:
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Your project description',
    technologies: ['Tech1', 'Tech2'],
    image: '🚀',
    link: 'https://project-link.com',
    github: 'https://github.com/your-repo',
    stats: { downloads: '1000+', users: '100+' },
    highlights: ['Feature 1', 'Feature 2']
  },
  // Add more projects
]
```

### Update Skills
Edit `frontend/src/pages/Skills.jsx`:
```javascript
const skillCategories = [
  {
    category: 'Your Category',
    icon: '⚡',
    skills: ['Skill1', 'Skill2', 'Skill3']
  },
  // Add more categories
]
```

### Modify Colors
Edit `frontend/src/index.css`:
```css
:root {
  --primary-dark: #0a0e27;
  --accent-blue: #00d4ff;
  --accent-purple: #7c3aed;
  --accent-pink: #ec4899;
  /* Update other colors */
}
```

### Update Social Links
Update links in:
- `frontend/src/components/Navbar.jsx`
- `frontend/src/components/Footer.jsx`
- `frontend/src/pages/Contact.jsx`

Replace the GitHub, LinkedIn, LeetCode, and GeeksforGeeks URLs with your profiles.

## 📧 Contact Form Setup

The contact form saves messages to MongoDB. To view submitted messages:

1. Backend must be running
2. Visit `http://localhost:5000/api/contact` (admin endpoint)
3. You'll see all submitted contact messages

To add email notifications, install Nodemailer:
```bash
npm install nodemailer
```

Update `backend/routes/contact.js` to send emails.

## 🌐 Deployment

### Deploy Frontend (Vercel)
```bash
cd frontend
npm run build
# Drag and drop the 'dist' folder to Vercel
```

### Deploy Backend (Render/Railway)
1. Push code to GitHub
2. Connect repository to Render or Railway
3. Set environment variables
4. Deploy

### MongoDB Atlas
- Already cloud-hosted, no additional setup needed
- Update frontend API URL in production

## 📦 Available Scripts

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Backend
```bash
npm run start    # Start production server
npm run dev      # Start with nodemon
```

## 🎨 Features Explained

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Touch-friendly navigation

### Animations
- Smooth page transitions
- Hover effects on interactive elements
- Scroll-triggered animations
- Staggered children animations

### Performance
- Lazy loading with Framer Motion
- Optimized images
- CSS variables for efficient styling
- Code splitting with React Router

## 🔒 Security Notes

- Never commit `.env` files
- Use environment variables for sensitive data
- Validate form input on backend
- Use HTTPS in production
- Enable CORS properly in production

## 📞 Contact Information

Update these in your portfolio:
- Email: ambikamishra9236@gmail.com
- Phone: +91-9219077025
- GitHub: https://github.com/ambikamishra03
- LinkedIn: https://www.linkedin.com/in/ambikamishraa/
- LeetCode: https://leetcode.com/u/ambikamishra/
- GeeksforGeeks: https://www.geeksforgeeks.org/profile/ambikamishra9236

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Frontend (change port in vite.config.js)
# Backend (change PORT in .env)
```

### MongoDB Connection Error
- Check MongoDB is running
- Verify connection string in .env
- Check MongoDB credentials

### CORS Error
- Ensure backend is running on correct port
- Check CORS configuration in backend
- Verify proxy in vite.config.js

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev)

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips for Enhancement

1. **Add Blog Section**: Create a blog page with articles
2. **Add Dark/Light Toggle**: Implement theme switcher
3. **Add Testimonials**: Include client testimonials
4. **Analytics**: Add Google Analytics
5. **Newsletter**: Implement newsletter subscription
6. **Backend Admin Panel**: Create admin dashboard
7. **API Documentation**: Add API docs with Swagger
8. **PWA**: Make it a Progressive Web App
9. **Image Optimization**: Use image compression
10. **SEO Optimization**: Add structured data (Schema.org)

---

**Happy coding! 🚀**

For questions or suggestions, feel free to reach out!
