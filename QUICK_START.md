# 🚀 Aigrit Website - Quick Start Guide

## ⚡ 5-Minute Setup

### Step 1: Open the Website Locally
```bash
# On Mac, open the index.html file:
open ~/Desktop/Aigrit/index.html

# Or drag index.html to your browser
# Or right-click → Open with → Browser
```

### Step 2: Verify Everything Works
- [ ] Homepage loads with drone animation
- [ ] Click navigation links
- [ ] Test mobile menu (hamburger icon)
- [ ] Try the contact form
- [ ] Check product filtering

### Step 3: Deploy to GitHub
```bash
cd ~/Desktop/Aigrit

# Initialize git
git init
git add .
git commit -m "Aigrit website - initial commit"

# Create repo at github.com and link it
git remote add origin https://github.com/YOUR_USERNAME/aigrit.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to https://github.com/YOUR_USERNAME/aigrit
2. Settings → Pages
3. Source: `main` branch, `/root` folder
4. Save
5. Wait 1-2 minutes...
6. Visit: `https://YOUR_USERNAME.github.io/aigrit`

---

## 📁 File Organization

```
✅ Root Level
├── index.html          (Main page)
├── README.md           (Documentation)
└── _config.yml         (GitHub Pages)

✅ CSS Folder (/css)
├── style.css          (2,200+ lines - all styling)
└── responsive.css     (500+ lines - mobile/tablet)

✅ JavaScript Folder (/js)
└── main.js            (500+ lines - all functionality)

✅ Pages Folder (/pages)
├── about.html         (About company)
├── products.html      (Product catalog)
├── services.html      (Service details)
└── contact.html       (Contact & FAQ)

✅ Images Folder (/images)
(Ready for your images)
```

---

## 🎨 Customization Tips

### Change Colors
Edit `css/style.css` lines 9-16:
```css
:root {
    --primary-color: #D4A373;      /* Gold/Bread color */
    --secondary-color: #2C1810;    /* Dark Brown */
    --accent-color: #FF6B35;       /* Orange/Energy */
    --light-bg: #FFF8F3;           /* Cream */
}
```

### Update Company Info
Edit these files and search for:
- **Name**: "Aigrit" - change everywhere
- **Phone**: "099 499 7046" - search and replace
- **Email**: "lengpovsry666@gmail.com" - search and replace
- **Founder**: "Leng Peou Sry" - search and replace
- **Location**: "Phnom Penh" - search and replace

### Add Products
Edit `pages/products.html` around line 80 and copy/modify product cards:
```html
<div class="product-card" data-category="bread">
    <div class="product-image">🍞</div>
    <div class="product-info">
        <h3>Product Name</h3>
        <p class="description">Description</p>
        <p class="price">$X.XX</p>
        <button class="btn btn-primary btn-sm">Add to Cart</button>
    </div>
</div>
```

---

## 🔍 What's Inside Each Page

### 🏠 index.html (Homepage)
- Hero section with drone animation
- 6 feature cards
- Technology showcase
- Company info with founder details
- Call-to-action buttons
- Footer with contact info

### 📖 about.html
- Mission and vision
- Leadership section
- 6 core values
- Company timeline/journey
- Team description
- Contact CTA

### 🍞 products.html
- Product catalog (9 items)
- Filter buttons (All, Bread, Pastries, Special)
- 3 subscription plans
- Add-to-cart functionality
- Order CTA

### 🚀 services.html
- 6 service offerings
- 6-step service process
- Drone specifications
- Service coverage area
- Customer testimonials
- Get started CTA

### 💬 contact.html
- Contact form with validation
- Contact information cards
- Social media links
- 8 FAQ items with toggle
- Responsive design

---

## ✨ Key Features to Show Off

### Mobile Responsive
- Open in Chrome DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M)
- See how it adapts to any screen size

### Smooth Animations
- Scroll down to see fade-in animations
- Hover over cards to see effects
- Click buttons to see ripple effects

### Interactive Elements
- Click hamburger menu on mobile
- Toggle FAQ items
- Filter products by category
- Smooth scroll to sections

### Professional Design
- Gold/brown/orange color scheme
- Consistent spacing and typography
- Card-based layout system
- Clean, modern aesthetic

---

## 📱 Browser Compatibility

Tested and works on:
- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile Chrome
- ✅ Mobile Safari

---

## 🚨 Troubleshooting

### "Links not working"
- Check that file names match exactly (case-sensitive)
- Use relative paths like: `pages/about.html`
- Don't use absolute paths starting with `/`

### "Styles look weird"
- Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Check that CSS files are in `/css` folder

### "Mobile menu not working"
- Open browser console (F12)
- Check for JavaScript errors
- Ensure `js/main.js` is loading

### "Images not showing"
- Images go in `/images` folder
- Link as: `<img src="../images/filename.jpg">`
- Ensure image file names are exact

---

## 📊 Content Quick Stats

| Item | Details |
|------|---------|
| **Total Pages** | 5 (Perfect for new business) |
| **Responsive Breakpoints** | Mobile, Tablet, Desktop |
| **Products Listed** | 9 varieties |
| **Services** | 6 main offerings |
| **Features Highlighted** | 6 unique benefits |
| **FAQ Items** | 8 common questions |
| **Form Fields** | 5 (Name, Email, Phone, Subject, Message) |
| **Colors** | 4 main theme colors |

---

## 🎯 Launch Checklist

- [ ] **Review Content** - All info accurate?
- [ ] **Test Locally** - Opened index.html?
- [ ] **Check Mobile** - Responsive design working?
- [ ] **Verify Links** - All navigation working?
- [ ] **Test Form** - Contact form validates?
- [ ] **GitHub Ready** - Repository created?
- [ ] **Deploy** - Pushed to GitHub?
- [ ] **Pages Enabled** - GitHub Pages activated?
- [ ] **Live URL** - Can access website online?
- [ ] **Share** - Tell people about it!

---

## 💡 Pro Tips

### For Better SEO:
1. Add a sitemap.xml file
2. Submit to Google Search Console
3. Add meta descriptions (already done!)
4. Create backlinks from social media

### For Better Performance:
1. Compress any images under 100KB
2. Use browser cache effectively
3. Minimize CSS/JS (optional)
4. Test with GTmetrix

### For Better Engagement:
1. Add email newsletter signup
2. Connect social media
3. Create blog section
4. Ask for customer feedback

### For Business Growth:
1. Add online ordering
2. Integrate payment processing
3. Set up email alerts
4. Create loyalty program

---

## 📞 Support Information

**Need Help?**
- Website: This guide (you're reading it!)
- Docs: Check README.md
- Deploy Help: GITHUB_PAGES_GUIDE.md
- Status: PROJECT_SUMMARY.md

**Company Contact:**
- 📱 Phone: 099 499 7046
- 📧 Email: lengpovsry666@gmail.com
- 📍 Location: Phnom Penh, Cambodia
- 👤 Founder: Leng Peou Sry

---

## 🎉 You're All Set!

Your professional Aigrit website is ready to:
- ✅ Showcase your business
- ✅ Attract customers
- ✅ Demonstrate innovation
- ✅ Build credibility
- ✅ Enable online presence

**Next steps:**
1. Test locally
2. Deploy to GitHub Pages
3. Share with everyone
4. Gather feedback
5. Make improvements
6. Celebrate success! 🚁🍞

---

**Happy Launching! 🚀**
