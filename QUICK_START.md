# 🚀 Ambika's Portfolio - Quick Start Guide

## 📦 What You're Getting

A complete MERN stack portfolio website with:
- ✨ Modern, responsive design with dark theme
- 🎨 Smooth animations and transitions
- 📱 Mobile-optimized interface
- 💼 Projects showcase
- 🎯 Skills section with proficiency levels
- 📧 Contact form (backend integrated)
- 🔗 Social media links
- 📊 Student dashboard (customizable)
- ⚡ Fast performance with Vite

## 📋 What's Included

```
ambika-portfolio/
├── frontend/           # React frontend application
│   ├── src/
│   │   ├── components/ # Navbar & Footer
│   │   ├── pages/      # Home, Projects, Skills, Contact
│   │   ├── index.css   # Global styles
│   │   └── App.jsx     # Main app
│   ├── package.json
│   └── vite.config.js
├── backend/            # Node.js/Express backend
│   ├── models/         # MongoDB schemas
│   ├── routes/         # API endpoints
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── README.md           # Full documentation
├── INSTALLATION.md     # Step-by-step setup
└── .gitignore

Total Files: 28
Total Size: ~33KB (minified, without node_modules)
```

## ⚡ Quick Setup (5 Minutes)

### Prerequisites
- Node.js (v14+) - [Download](https://nodejs.org/)
- MongoDB - [Free Cloud](https://www.mongodb.com/cloud/atlas) OR [Local](https://www.mongodb.com/try/download/community)

### 1️⃣ Extract & Navigate

```bash
unzip ambika-portfolio.zip
cd ambika-portfolio
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install

# Create .env file with MongoDB connection string
echo "MONGODB_URI=mongodb://localhost:27017/ambika-portfolio" > .env
echo "PORT=5000" >> .env

# Start backend
npm run dev
```

**Expected output:**
```
Server running on port 5000
MongoDB connected
```

### 3️⃣ Frontend Setup (New Terminal)

```bash
cd frontend
npm install

# Start frontend
npm run dev
```

**Expected output:**
```
VITE v4.4.9 ready in 1234 ms
➜  Local: http://localhost:3000/
```

### 4️⃣ Open & Test

Go to: **http://localhost:3000** 🎉

## 🎨 Customization (Key Files)

### Update Your Profile
- **Home about section**: `frontend/src/pages/Home.jsx` (line 105+)
- **Contact info**: `frontend/src/pages/Contact.jsx` (line 26+)
- **Social links**: `frontend/src/components/Footer.jsx` (line 10+)

### Add Your Projects
`frontend/src/pages/Projects.jsx` (line 5+)

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'What this project does...',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '🚀',  // Use emoji or icon
    link: 'https://your-project.com',
    github: 'https://github.com/yourusername/repo',
    stats: { downloads: '1000+', users: '500+' },
    highlights: ['Feature 1', 'Feature 2', 'Feature 3']
  }
  // Add more...
]
```

### Add Your Skills
`frontend/src/pages/Skills.jsx` (line 6+)

```javascript
const skillCategories = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion']
  }
  // Add more categories...
]
```

### Change Colors
`frontend/src/index.css` (line 2+)

```css
:root {
  --primary-dark: #0a0e27;      /* Change background */
  --accent-blue: #00d4ff;        /* Change primary color */
  --accent-purple: #7c3aed;      /* Change secondary color */
  /* ... more colors ... */
}
```

## 📧 Contact Form Setup

The contact form works out of the box! Messages are saved to MongoDB.

**To view submitted messages:**

Visit: `http://localhost:5000/api/contact`

**To add email notifications** (optional):

Edit `backend/routes/contact.js` and add email sending with Nodemailer (see documentation).

## 🌐 MongoDB Setup

### Option A: MongoDB Atlas (Cloud - Recommended)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account
3. Create cluster
4. Get connection string
5. Add to `.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ambika-portfolio
   ```

### Option B: Local MongoDB

**macOS:**
```bash
brew install mongodb-community
brew services start mongodb-community
# Use: mongodb://localhost:27017/ambika-portfolio
```

**Windows:**
- Download and run installer from MongoDB website
- MongoDB runs as service automatically
- Use: `mongodb://localhost:27017/ambika-portfolio`

**Linux:**
```bash
sudo apt-get install -y mongodb
sudo systemctl start mongodb
# Use: mongodb://localhost:27017/ambika-portfolio
```

## 📱 Device Support

- ✅ Desktop (1440p+)
- ✅ Laptop (1024p+)
- ✅ Tablet (768p+)
- ✅ Mobile (320p+)

All responsive and mobile-optimized!

## 🚀 Deploy Your Portfolio

### Frontend (Choose One)

**Vercel (Recommended)**
```bash
npm install -g vercel
cd frontend
vercel
```

**Netlify**
- Connect GitHub repo
- Deploy automatically

**GitHub Pages**
- Deploy static build

### Backend (Choose One)

- **Render.com** - Free tier, easy setup
- **Railway.app** - Pay-as-you-go
- **Heroku** - Popular, good docs

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Change ports in vite.config.js or .env
# Default: Frontend 3000, Backend 5000
```

### MongoDB Connection Error
1. Check MongoDB is running
2. Verify connection string in `.env`
3. Ensure correct username/password
4. Check IP whitelist in MongoDB Atlas

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### CORS Errors
- Ensure backend is running
- Refresh page
- Check proxy in vite.config.js

## 📚 Documentation

- **Full Setup Guide**: Open `INSTALLATION.md`
- **API Documentation**: See `backend/routes/contact.js`
- **Components**: See `frontend/src/components/`
- **Styling**: See `frontend/src/index.css`

## ✨ Key Features

| Feature | Details |
|---------|---------|
| 🎨 **Design** | Modern dark theme with gradients |
| 📱 **Responsive** | Works on all devices |
| ⚡ **Performance** | Optimized with Vite |
| 🎬 **Animations** | Framer Motion smooth transitions |
| 💾 **Database** | MongoDB integration |
| 🔗 **API** | Express.js REST API |
| 🛡️ **Scalable** | Easy to extend and customize |

## 🎯 Next Steps

1. **Customize** - Update projects, skills, and info
2. **Test** - Try all pages and contact form
3. **Deploy** - Push to production
4. **Share** - Send link to friends/recruiters

## 📞 Contact Customization

Update your details in:
- Email: `frontend/src/pages/Contact.jsx`
- Phone: `frontend/src/pages/Contact.jsx`
- LinkedIn: `frontend/src/components/Footer.jsx`
- GitHub: `frontend/src/components/Navbar.jsx`

## 💡 Tips & Tricks

1. **Add Blog Section**: Create `pages/Blog.jsx`
2. **Add Testimonials**: Add testimonials component
3. **Analytics**: Integrate Google Analytics
4. **Dark/Light Mode**: Add theme toggle
5. **Newsletter**: Add subscription form

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| Port 3000 in use | Change in vite.config.js |
| MongoDB error | Check .env & connection |
| API not working | Verify backend is running |
| Styles not loading | Clear cache, restart dev server |

## 📞 Support Resources

- [React Docs](https://react.dev)
- [Express Docs](https://expressjs.com)
- [MongoDB Docs](https://docs.mongodb.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev)

## 🎓 Learn More

This portfolio uses:
- **React 18** - Modern UI library
- **Node.js/Express** - Backend framework
- **MongoDB** - NoSQL database
- **Framer Motion** - Animation library
- **Tailwind CSS** - Styling
- **Vite** - Build tool

All are industry-standard technologies!

## 📝 File Structure Quick Reference

```
frontend/src/pages/
├── Home.jsx          # Hero + About section
├── Projects.jsx      # Your projects showcase
├── Skills.jsx        # Skills & coursework
└── Contact.jsx       # Contact form

frontend/src/components/
├── Navbar.jsx        # Navigation header
└── Footer.jsx        # Footer with social links

backend/
├── server.js         # Express app setup
├── routes/contact.js # Contact API endpoint
└── models/Contact.js # MongoDB schema
```

## 🎉 You're Ready!

Everything is set up and ready to use. Just customize with your information and deploy!

**Questions?** Check `INSTALLATION.md` for detailed guide.

**Happy coding!** 🚀

---

**Made with ❤️ using MERN Stack**
