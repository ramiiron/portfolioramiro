# Ramiro Bugueño - Professional Portfolio

A modern, responsive portfolio website showcasing IT expertise and project management experience.

## 🎨 Features

- **Modern Design**: Clean, professional aesthetic with smooth animations and transitions
- **Dark/Light Theme**: Toggle between themes with persistent preference storage
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, smooth scrolling, and active navigation highlighting
- **Performance Optimized**: Lightweight and fast-loading
- **Accessibility**: Semantic HTML and keyboard navigation support

## 📋 Setup Instructions

### 1. Add Your Profile Image

The website expects a profile image named `KS7A3266-2.jpg` in the root directory. 

**To add your image:**
- Place your professional photo in the same folder as `index.html`
- Rename it to `KS7A3266-2.jpg` OR
- Update line 44 in `index.html` to match your image filename:
  ```html
  <img src="YOUR-IMAGE-NAME.jpg" alt="Ramiro Bugueño - IT Professional" class="hero-img-new">
  ```s

**Recommended image specifications:**
- Aspect ratio: 3:4 (portrait orientation)
- Minimum resolution: 600x800 pixels
- Format: JPG or PNG
- Professional headshot or upper body photo

### 2. Form Integration (PLACEHOLDER)

The contact form currently shows a success message but doesn't send emails. To make it functional, you need to integrate a form service:

**Option 1: EmailJS (Recommended - Free tier available)**
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Set up your email service
3. Replace the form submission code in `script.js` (around line 145) with EmailJS integration

**Option 2: Formspree**
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the form action or use their API

**Option 3: Your Own Backend**
- Implement a server-side endpoint
- Update the fetch URL in `script.js`

### 3. Social Media Links (PLACEHOLDER)

Add your social media profiles in the footer section of `index.html`:

Current placeholders in the footer (around line 300):
```html
<!-- PLACEHOLDER: Add GitHub, Twitter, or other social links as needed -->
```

Example additions:
```html
<a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
    <i class="fab fa-github"></i>
</a>
<a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
    <i class="fab fa-twitter"></i>
</a>
```

### 4. Additional Customizations

**Projects Section (Optional Addition):**
Consider adding a projects/portfolio section to showcase specific work:
- Add a new section between Experience and Skills
- Include project screenshots
- Link to live demos or GitHub repositories

**Testimonials Section (Optional):**
If you have recommendations or testimonials, you can add them:
- Create a new section after About
- Use the same card styling as Experience cards

**Blog/Articles (Optional):**
If you write technical articles or maintain a blog:
- Add links in the navigation
- Create a new section showcasing your writing

## 🚀 Deployment

### Deploy to GitHub Pages:
1. Create a new GitHub repository
2. Upload all files (index.html, styles.css, script.js, and your image)
3. Go to Settings → Pages
4. Select the main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Deploy to Netlify:
1. Create account at [netlify.com](https://www.netlify.com)
2. Drag and drop your folder or connect your GitHub repo
3. Site deploys automatically

### Deploy to Vercel:
1. Create account at [vercel.com](https://vercel.com)
2. Import your GitHub repository or upload files
3. Automatic deployment on every commit

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Color Scheme

### Dark Theme (Default)
- Background: #0A0E27
- Accent: #00D9FF (Cyan)
- Secondary Accent: #FF006E (Pink)

### Light Theme
- Background: #F5F7FA
- Accent: #0077B6 (Blue)
- Secondary Accent: #D62828 (Red)

## 📝 Content Updates

All your professional information from your resume has been integrated:

✅ Education (Ensign College & Universidad Tecnológica de Chile)
✅ Work Experience (GSD, ABB, Colbun Soluciones, Regus)
✅ Skills (Technical, Project Management, Soft Skills)
✅ Contact Information
✅ Professional Statistics

## 🔧 Technologies Used

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Syne & DM Sans)

## 📞 Support

If you need help customizing the portfolio or have questions:
- Email: bugueno.ramiro@gmail.com
- LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/ramiro-bugueño-b728b8b4/)

## 📄 License

This portfolio website is for personal use. Feel free to customize it for your needs.

---

**Note**: This is a static website. For dynamic features (blog, CMS, etc.), consider integrating with a headless CMS like Contentful or Sanity.io.

## 🎯 Quick Start Checklist

- [ ] Add your profile image (KS7A3266-2.jpg)
- [ ] Test the website locally by opening index.html
- [ ] Set up form integration (EmailJS/Formspree)
- [ ] Add additional social media links
- [ ] Customize colors if desired (in styles.css :root section)
- [ ] Add any missing projects or achievements
- [ ] Test on mobile devices
- [ ] Deploy to your preferred hosting platform
- [ ] Share your portfolio URL!

Good luck with your portfolio! 🚀