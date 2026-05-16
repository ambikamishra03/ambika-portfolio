# 🎨 Customization Guide

This guide shows you exactly where and how to customize every part of your portfolio.

## 1. Personal Information

### A. Contact Information

**File:** `frontend/src/pages/Contact.jsx`

Find this section (around line 26):
```javascript
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
  // ... more items
]
```

Replace with YOUR information:
- Email address
- Phone number
- Location
- LinkedIn profile

### B. Navigation Links

**File:** `frontend/src/components/Navbar.jsx`

Find and update:
```javascript
<a href="https://github.com/ambikamishra03" target="_blank" rel="noopener noreferrer">
  GitHub
</a>
```

Change `https://github.com/ambikamishra03` to YOUR GitHub URL.

### C. Footer Links

**File:** `frontend/src/components/Footer.jsx`

Update social links (around line 10):
```javascript
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/YOUR-USERNAME', icon: '🐙' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/YOUR-PROFILE/', icon: '💼' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/YOUR-USERNAME/', icon: '💻' },
  { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/profile/YOUR-PROFILE', icon: '📚' },
]
```

## 2. Projects

**File:** `frontend/src/pages/Projects.jsx`

### Add a New Project

Find the `projects` array (around line 5) and add:

```javascript
{
  id: 5,
  title: 'Your Project Name',
  description: 'A brief description of what this project does',
  technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  image: '🚀', // Use any emoji
  link: 'https://live-project-link.com',
  github: 'https://github.com/yourusername/repo',
  stats: { 
    downloads: '1000+',
    users: '500+',
    rating: '4.8★'
  },
  highlights: [
    'Key feature 1',
    'Key feature 2',
    'Key feature 3'
  ]
}
```

### Edit Project Details

Each project has these fields:
- `title` - Project name
- `description` - What it does (1-2 sentences)
- `technologies` - Array of technologies used
- `image` - Emoji or icon (can also use HTML entities like `⚡`)
- `link` - URL to live project
- `github` - GitHub repository link
- `stats` - Key metrics/achievements
- `highlights` - 3 main features

### Remove a Project

Delete the entire project object from the `projects` array.

### Change Project Images

Replace the emoji with any of these:
- `🚀` - Rocket (launches/deployment)
- `🎮` - Game
- `🛒` - E-commerce
- `📱` - Mobile app
- `💻` - Desktop app
- `🎬` - Video/media
- `📊` - Analytics/dashboard
- `🔐` - Security
- `⚡` - Performance
- `🎨` - Design tool

## 3. Skills

**File:** `frontend/src/pages/Skills.jsx`

### Add a New Skill Category

Find `skillCategories` array (around line 6):

```javascript
{
  category: 'New Category',
  icon: '🎯', // Use relevant emoji
  skills: ['Skill1', 'Skill2', 'Skill3', 'Skill4']
}
```

### Modify Proficiency Levels

Find `proficiencies` array (around line 30):

```javascript
{ name: 'Python', level: 85 }, // Change level 0-100
```

### Add Coursework

Find `coursework` array (around line 42):

```javascript
const coursework = [
  'Your Course 1',
  'Your Course 2',
  'Your Course 3',
  // ... add more
]
```

### Update Learning Section

Find the learning section (around line 73):

```javascript
<p>
  Your learning goals and interests...
</p>
```

## 4. Home Page

**File:** `frontend/src/pages/Home.jsx`

### A. Hero Section

Line ~15-20:
```javascript
<h1 className="hero-title">
  Hi, I'm <span className="gradient-text">YOUR NAME</span>
</h1>

<p className="hero-subtitle">
  YOUR TITLE | INTERESTS
</p>

<p className="hero-description">
  YOUR ABOUT PARAGRAPH
</p>
```

### B. Stats Section

Line ~35-40:
```javascript
const stats = [
  { label: 'Projects', value: '5+' },
  { label: 'Your Stat', value: 'Value' },
  { label: 'Experience', value: 'Your Info' },
]
```

### C. About Section

Line ~100+:
```javascript
<p>
  First paragraph about yourself
</p>
<p>
  Second paragraph about your journey
</p>
<p>
  Third paragraph about your interests
</p>
```

### D. Highlight Boxes

Update education details:
```javascript
<h3>MTech CSE</h3>
<p>Your University</p>
<p className="highlight-year">2027</p>
```

## 5. Colors & Styling

**File:** `frontend/src/index.css`

### Change Theme Colors

Lines 2-12:
```css
:root {
  --primary-dark: #0a0e27;      /* Main background */
  --primary-light: #1a1f3a;     /* Secondary background */
  --accent-blue: #00d4ff;       /* Primary accent */
  --accent-purple: #7c3aed;     /* Secondary accent */
  --accent-pink: #ec4899;       /* Tertiary accent */
  --text-primary: #ffffff;      /* Main text */
  --text-secondary: #a0a0a0;    /* Muted text */
  --border-color: #2a3055;      /* Borders */
  --success: #10b981;           /* Success color */
  --error: #ef4444;             /* Error color */
}
```

### Example: Change to Light Theme

```css
:root {
  --primary-dark: #ffffff;      /* White background */
  --primary-light: #f5f5f5;     /* Light gray */
  --accent-blue: #0066ff;       /* Blue */
  --accent-purple: #7c3aed;     /* Purple */
  --accent-pink: #ec4899;       /* Pink */
  --text-primary: #000000;      /* Black text */
  --text-secondary: #666666;    /* Gray text */
  --border-color: #e0e0e0;      /* Light borders */
}
```

## 6. Navigation Menu

**File:** `frontend/src/components/Navbar.jsx`

### Add New Navigation Link

Line ~15-20:
```javascript
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
  { name: 'Blog', path: '/blog' }, // Add this
]
```

Then add the route in `App.jsx`:
```javascript
<Route path="/blog" element={<Blog />} />
```

## 7. Social Links

Update in THREE places:

### In Footer
**File:** `frontend/src/components/Footer.jsx` (line 10)

### In Contact Page
**File:** `frontend/src/pages/Contact.jsx` (line 35)

### In Navbar
**File:** `frontend/src/components/Navbar.jsx` (line 33)

## 8. Animations

### Adjust Animation Speed

**File:** `frontend/src/pages/Home.jsx`

```javascript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }} // Change 0.8 to higher for slower
```

### Add New Animation

Use Framer Motion:
```javascript
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  whileHover={{ scale: 1.05 }}
>
  Content
</motion.div>
```

## 9. Typography

### Change Fonts

**File:** `frontend/src/index.css` (line 18)

```css
body {
  font-family: 'Your Font', Arial, sans-serif;
}
```

Google Fonts options:
- 'Poppins', sans-serif
- 'Inter', sans-serif
- 'Playfair Display', serif
- 'Outfit', sans-serif

## 10. Adding New Pages

### Step 1: Create Page File
Create `frontend/src/pages/Blog.jsx`:

```javascript
import { motion } from 'framer-motion'
import './Blog.css'

export default function Blog() {
  return (
    <main className="blog">
      {/* Your content */}
    </main>
  )
}
```

### Step 2: Create CSS
Create `frontend/src/pages/Blog.css`

### Step 3: Add Route
**File:** `frontend/src/App.jsx`

```javascript
import Blog from './pages/Blog'

// In Routes:
<Route path="/blog" element={<Blog />} />
```

### Step 4: Add Navigation
**File:** `frontend/src/components/Navbar.jsx`

```javascript
{ name: 'Blog', path: '/blog' }
```

## 11. Contact Form

### Change Form Fields

**File:** `frontend/src/pages/Contact.jsx`

Current fields:
- name
- email
- subject
- message

To add a field:
```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: '',
  phone: '', // New field
})
```

Then add input in form:
```javascript
<div className="form-group">
  <label htmlFor="phone">Phone</label>
  <input
    type="tel"
    id="phone"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="Your phone"
  />
</div>
```

## 12. Backend Customization

### Add Email Notifications

**File:** `backend/routes/contact.js`

```javascript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// In your contact post route:
await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: email,
  subject: `Message received: ${subject}`,
  text: `Thank you for reaching out. We'll get back to you soon.`
});
```

Add to `.env`:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
```

## Quick Find & Replace

| Find | Replace With |
|------|--------------|
| ambikamishra9236@gmail.com | your-email@gmail.com |
| +91-9219077025 | your-phone |
| Ambika Mishra | Your Name |
| Gorakhpur, Uttar Pradesh | Your Location |
| github.com/ambikamishra03 | github.com/YOUR-USERNAME |
| linkedin.com/in/ambikamishraa | linkedin.com/in/YOUR-PROFILE |

## Testing Your Changes

After making changes:

1. **Frontend**: Changes show instantly with hot reload
2. **Backend**: Restart with `npm run dev`
3. **Colors**: Refresh browser (Ctrl+R)
4. **MongoDB**: Check backend terminal for errors

## Useful Emoji Reference

**Category Emojis**
- 💻 Frontend/Code
- 🎨 Design
- ⚙️ Backend
- 🛠️ Tools
- 🚀 Features/Speed
- 🤝 Soft Skills
- 📚 Learning
- 🎓 Education

## Need Help?

1. Check browser console (F12) for errors
2. Check terminal for server errors
3. Verify file paths are correct
4. Make sure you saved the file
5. Restart dev server

---

**Pro Tip:** Start with small changes and test each one before moving to the next!
