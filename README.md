# LearnSmart Academy - Online Education Platform Template

A modern, responsive, and feature-rich educational platform template built with Bootstrap 5, designed specifically for the Indian market.

## 🚀 Features

- **Fully Responsive Design** - Works perfectly on all devices (desktop, tablet, mobile)
- **Bootstrap 5.3.2** - Modern UI components and utilities
- **Indian Localization** - INR currency, Indian contact info, local context
- **13+ Complete Pages** - Ready-to-use pages for a full education platform
- **Clean Code** - Well-structured, commented, and maintainable
- **No Server Required** - All pages work with inline headers/footers
- **English Only** - Clean, professional English content throughout
- **SEO Friendly** - Optimized meta tags and semantic HTML
- **Modern UI/UX** - Beautiful animations, hover effects, and smooth transitions

## 📋 Pages Included

### Core Pages
- **Homepage** (`index.html`) - Hero section, featured courses, categories, stats
- **All Courses** (`pages/courses.html`) - Filterable course catalog with sidebar
- **Course Details** (`pages/course-details.html`) - Complete course information page
- **Instructors** (`pages/instructors.html`) - Instructor profiles grid
- **About Us** (`pages/about.html`) - Company info, mission, vision, team

### Authentication
- **Login** (`pages/login.html`) - User login page with validation
- **Register** (`pages/register.html`) - User registration form

### Dashboard
- **Student Dashboard** (`pages/dashboard.html`) - Learning progress, enrolled courses

### Additional Pages
- **Blog** (`pages/blog.html`) - Blog posts listing
- **Contact** (`pages/contact.html`) - Contact form with map
- **Pricing** (`pages/pricing.html`) - Subscription plans
- **FAQ** (`pages/faq.html`) - Frequently asked questions
- **Privacy Policy** (`pages/privacy-policy.html`) - GDPR compliant
- **Terms & Conditions** (`pages/terms.html`) - Legal terms
- **404 Page** (`pages/404.html`) - Custom error page

## 🎨 Design Features

- Primary Color: **#ff6b35** (Orange)
- Secondary Color: **#0066cc** (Blue)
- Google Fonts: **Poppins** (headings) & **Inter** (body)
- Icons: **Font Awesome 6.4.0**
- Smooth animations and transitions
- Card hover effects
- Responsive navigation with dropdown menus
- Sticky header navigation

## 📁 Folder Structure

```
EDUCATIONONLIN/
│
├── index.html                 # Homepage
│
├── assets/
│   ├── css/
│   │   ├── style.css         # Core theme styles
│   │   ├── layout.css        # Grid and spacing
│   │   └── responsive.css    # Media queries
│   │
│   ├── js/
│   │   └── main.js           # Counter animations, utilities
│   │
│   └── img/                  # Images folder (placeholder)
│
├── pages/
│   ├── about.html
│   ├── blog.html
│   ├── contact.html
│   ├── courses.html
│   ├── course-details.html
│   ├── dashboard.html
│   ├── faq.html
│   ├── instructors.html
│   ├── login.html
│   ├── pricing.html
│   ├── privacy-policy.html
│   ├── register.html
│   ├── terms.html
│   └── 404.html
│
└── README.md                 # This file
```

## 🚀 Getting Started

### Option 1: Direct Usage (No Server Required)
1. Download/clone this repository
2. Open `index.html` in any modern web browser
3. Navigate through the site using the menu

### Option 2: Using a Local Server (Recommended)
Using a local server provides the best experience:

**With VS Code:**
```bash
# Install Live Server extension in VS Code
# Right-click on index.html → "Open with Live Server"
```

**With Python:**
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

**With Node.js:**
```bash
# Install serve globally
npm install -g serve

# Run server
serve

# Then open: http://localhost:3000
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Use Cases

This template is perfect for:
- Online course platforms
- Educational institutions
- E-learning startups
- Training centers
- Coaching institutes
- Corporate training platforms
- Skill development programs

## 🛠️ Customization

### Change Brand Colors
Edit `assets/css/style.css`:
```css
:root {
    --primary-color: #ff6b35;    /* Change to your brand color */
    --secondary-color: #0066cc;  /* Change to your secondary color */
}
```

### Update Company Information
Replace placeholder content in:
- Contact details in footer
- About page company info
- Contact page address and phone

### Add Your Logo
Replace the graduation cap icon in navigation with your logo image.

### Add Course Images
Place your course images in `assets/img/courses/` and update image URLs.

## 📊 Features Breakdown

### Homepage
- Eye-catching hero section with search
- Animated statistics counters
- Category cards with icons
- Featured courses grid
- Why choose us section
- Newsletter subscription

### Course Catalog
- Filter sidebar (category, level, price)
- Sort options
- Course cards with ratings
- Pagination
- Responsive grid layout

### Student Dashboard
- Enrollment statistics
- Continue learning section
- Progress tracking
- Recent activity feed
- Recommended courses

### Forms & Validation
- Client-side form validation
- Password strength indicators
- Email format validation
- Required field checking

## 🌐 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch (usually `main`)
4. Click Save
5. Your site will be live at `https://yourusername.github.io/repository-name/`

### Netlify
1. Create account on Netlify
2. Drag and drop your folder
3. Site goes live instantly
4. Get free HTTPS domain

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📞 Support & Contact

For questions or support:
- Email: support@learnsmart.in
- Phone: +91 98765 43210
- Location: Bengaluru, Karnataka, India

## 📝 License

This template is free to use for both personal and commercial projects.

## 🙏 Credits

- **Bootstrap 5.3.2** - https://getbootstrap.com
- **Font Awesome 6.4.0** - https://fontawesome.com
- **Google Fonts** - https://fonts.google.com
- **Unsplash** - https://unsplash.com (placeholder images)

## 📈 Version History

**v1.0.0** (January 2025)
- Initial release
- 13+ complete pages
- Fully responsive design
- English content
- Indian localization

---

**Built with ❤️ for the Indian education sector**

**Made by LearnSmart Academy Team**

