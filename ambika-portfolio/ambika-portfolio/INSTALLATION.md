# 📖 Installation & Setup Guide

This guide provides detailed step-by-step instructions to get your portfolio website up and running.

## Prerequisites Check

Before starting, ensure you have:
- [Node.js](https://nodejs.org/) (v14 or higher) - Download and install
- [MongoDB](https://www.mongodb.com/try/download/community) OR MongoDB Atlas account
- A code editor (VS Code recommended)
- Git (optional, but recommended)

### Verify Installation

```bash
# Check Node.js version
node --version

# Check npm version
npm --version
```

## Step 1: Download and Extract Files

1. Extract the `ambika-portfolio.zip` file to your desired location
2. Navigate to the project folder in your terminal/command prompt

```bash
cd ambika-portfolio
```

## Step 2: MongoDB Setup

### Option A: Using MongoDB Atlas (Recommended - Cloud Database)

1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Click "Try Free"
3. Create an account and sign in
4. Create a new cluster (free tier is fine)
5. Click "Cluster0" → "Connect"
6. Choose "Connect Your Application"
7. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority`)
8. Replace `<password>` and database name with your credentials

### Option B: Local MongoDB Installation

**Windows:**
1. Download [MongoDB Community Server](https://www.mongodb.com/try/download/community)
2. Run the installer and follow prompts
3. MongoDB will run as a service
4. Connection string: `mongodb://localhost:27017/ambika-portfolio`

**macOS:**
```bash
# Using Homebrew
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
# Connection string: mongodb://localhost:27017/ambika-portfolio
```

**Linux:**
```bash
# Ubuntu/Debian
sudo apt-get install -y mongodb
sudo systemctl start mongodb
# Connection string: mongodb://localhost:27017/ambika-portfolio
```

## Step 3: Backend Setup

### 3.1 Navigate to Backend Directory

```bash
cd backend
```

### 3.2 Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`:
- express
- cors
- dotenv
- mongoose
- nodemailer (optional)

### 3.3 Create Environment File

Copy the example environment file:

```bash
cp .env.example .env
```

Edit the `.env` file:

```env
# .env file
MONGODB_URI=mongodb+srv://yourUsername:yourPassword@cluster.mongodb.net/ambika-portfolio
# OR if using local MongoDB:
# MONGODB_URI=mongodb://localhost:27017/ambika-portfolio

PORT=5000
NODE_ENV=development
```

**Replace:**
- `yourUsername` - Your MongoDB username
- `yourPassword` - Your MongoDB password
- Keep `ambika-portfolio` as your database name

### 3.4 Start Backend Server

```bash
npm run dev
```

You should see:
```
Server running on port 5000
MongoDB connected
```

✅ **Backend is ready!** Keep this terminal open.

## Step 4: Frontend Setup

### 4.1 Open New Terminal/Command Prompt

Navigate to frontend folder:

```bash
cd frontend
```

### 4.2 Install Dependencies

```bash
npm install
```

This will install:
- react
- react-dom
- react-router-dom
- axios
- framer-motion
- vite (build tool)

### 4.3 Update API URL (if needed)

The frontend is configured to communicate with backend at `http://localhost:5000`

If running on different ports, update in `vite.config.js`:

```javascript
server: {
  port: 3000,
  proxy: {
    '/api': {
      target: 'http://localhost:5000',  // Change if needed
      changeOrigin: true
    }
  }
}
```

### 4.4 Start Frontend Server

```bash
npm run dev
```

You should see:
```
VITE v4.4.9 ready in 1234 ms

➜  Local:   http://localhost:3000/
```

## Step 5: Access Your Portfolio

Open your browser and visit:

```
http://localhost:3000
```

🎉 **Your portfolio is now running!**

## Verification Checklist

- ✅ Backend running on `http://localhost:5000`
- ✅ Frontend running on `http://localhost:3000`
- ✅ Can navigate between pages
- ✅ All animations working
- ✅ Contact form functional
- ✅ No console errors

## Common Issues & Solutions

### Issue: "Port 3000 already in use"

**Solution:**
```bash
# Change port in vite.config.js
server: {
  port: 3001,  // Use different port
  ...
}
```

### Issue: "MongoDB connection error"

**Solution:**
1. Check MongoDB is running
2. Verify connection string in `.env`
3. Ensure username/password are correct
4. Check MongoDB whitelist includes your IP (Atlas)

### Issue: "Cannot POST /api/contact"

**Solution:**
1. Ensure backend server is running
2. Check backend port is 5000
3. Verify API URL in frontend config

### Issue: "Module not found"

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: "CORS Error"

**Solution:**
Ensure backend is running before frontend. Refresh page.

## Customizing Your Portfolio

### Update Personal Information

1. **Contact Info** - `frontend/src/pages/Contact.jsx`
   - Email
   - Phone
   - Location
   - Social links

2. **Projects** - `frontend/src/pages/Projects.jsx`
   - Add/remove projects
   - Update project details
   - Change project images/emojis

3. **Skills** - `frontend/src/pages/Skills.jsx`
   - Modify skill categories
   - Add/remove skills
   - Update proficiency levels

4. **About Section** - `frontend/src/pages/Home.jsx`
   - Update bio
   - Change education details
   - Modify experience

### Change Colors

Edit `frontend/src/index.css`:

```css
:root {
  --primary-dark: #0a0e27;      /* Background */
  --accent-blue: #00d4ff;        /* Primary accent */
  --accent-purple: #7c3aed;      /* Secondary accent */
  --accent-pink: #ec4899;        /* Tertiary accent */
  --text-primary: #ffffff;       /* Main text */
  --text-secondary: #a0a0a0;     /* Muted text */
}
```

## Building for Production

### Frontend Build

```bash
cd frontend
npm run build
```

This creates a `dist` folder with optimized files.

### Backend Production

1. Update `.env` to production settings
2. Deploy to hosting service (Render, Railway, Heroku)

## Deployment Options

### Frontend (Choose One)

1. **Vercel** (Recommended)
   - Free hosting
   - Automatic deployments
   - Just push to GitHub

2. **Netlify**
   - Free tier
   - Easy setup
   - Good performance

3. **GitHub Pages**
   - Free
   - Limited functionality
   - Good for static sites

### Backend (Choose One)

1. **Render**
   - Free tier available
   - Easy MongoDB integration

2. **Railway**
   - Pay-as-you-go
   - Good for beginners

3. **Heroku** (Free tier ending)
   - Popular option
   - Good documentation

## Advanced Customization

### Add More Pages

1. Create new file in `frontend/src/pages/YourPage.jsx`
2. Create corresponding CSS file
3. Add route in `frontend/src/App.jsx`:

```javascript
<Route path="/your-page" element={<YourPage />} />
```

4. Add navigation link in `frontend/src/components/Navbar.jsx`

### Add Email Notifications

Install nodemailer in backend:

```bash
npm install nodemailer
```

Update `backend/routes/contact.js`:

```javascript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Send email on form submission
await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  subject: `New contact: ${subject}`,
  text: `From: ${email}\n\n${message}`
});
```

Add to `.env`:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

### Add Blog Section

1. Create `Blog.jsx` in pages
2. Add blog model in backend
3. Create API endpoints
4. Display blog posts on frontend

## Need Help?

- Check browser console for errors (F12)
- Check terminal/command prompt for server errors
- Review README.md for detailed information
- Common issues are usually port conflicts or MongoDB connection

## Next Steps

1. ✅ Get it running locally
2. ✅ Customize with your information
3. ✅ Test all features
4. ✅ Deploy to production
5. ✅ Share your portfolio!

---

**Happy coding!** 🚀

If you encounter issues not listed here, feel free to check the troubleshooting section in README.md or Google the error message.
