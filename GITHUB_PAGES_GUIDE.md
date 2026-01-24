# GitHub Pages Deployment Guide for Aigrit Website

## Quick Start - Deploy in 5 Minutes

### Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Name it `aigrit` (or any name you prefer)
3. Add description: "AI Autonomous Drone Delivery Bread Retail Website"
4. Choose "Public" (required for free GitHub Pages)
5. Click "Create repository"

### Step 2: Upload Files to GitHub

**Option A: Using Git (Command Line)**

```bash
# Navigate to your project folder
cd ~/Desktop/Aigrit

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Aigrit website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/aigrit.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Option B: Using GitHub Desktop (Easier)**

1. Open GitHub Desktop
2. Click "File" → "New Repository"
3. Name: `aigrit`
4. Choose your local path: `/Users/sry/Desktop/Aigrit`
5. Click "Create Repository"
6. Click "Publish repository"
7. Make it public
8. Done!

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: Select "Deploy from a branch"
   - Branch: Select `main` (or `master`)
   - Folder: Select `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for deployment

### Step 4: Access Your Website

Your site will be available at:
```
https://YOUR_USERNAME.github.io/aigrit
```

Example: `https://johndoe.github.io/aigrit`

## Troubleshooting

### Site Not Appearing?

1. **Check Settings**: Ensure GitHub Pages is enabled in Settings → Pages
2. **Wait for Build**: GitHub Pages takes 1-2 minutes to build
3. **Check Build Status**: In Settings → Pages, look for deployment status
4. **Refresh Browser**: Hard refresh with Ctrl+Shift+R or Cmd+Shift+R
5. **Check for Errors**: Click the deployment badge for error messages

### Content Not Updating?

1. Make sure you pushed all changes to GitHub
2. Clear browser cache (Ctrl+Shift+Delete)
3. Wait a few minutes for GitHub to rebuild
4. Hard refresh the page

### Links Not Working?

If links are broken after deployment:

1. Open [_config.yml](_config.yml)
2. Update the `baseurl` line:
   ```yaml
   baseurl: /aigrit
   ```
3. In `index.html` and pages, relative links should work automatically

## File Structure (What Gets Deployed)

```
Your Repository Root/
├── index.html              ✓ Deployed
├── css/
│   ├── style.css          ✓ Deployed
│   └── responsive.css     ✓ Deployed
├── js/
│   └── main.js            ✓ Deployed
├── pages/
│   ├── about.html         ✓ Deployed
│   ├── products.html      ✓ Deployed
│   ├── services.html      ✓ Deployed
│   └── contact.html       ✓ Deployed
├── images/                ✓ Deployed (if added)
├── README.md              ✓ Deployed
├── .gitignore             ✓ Not visible
├── _config.yml            ✓ GitHub Pages config
└── GITHUB_PAGES_GUIDE.md  ✓ This file
```

## Making Updates

### To Update Your Website:

1. **Edit files locally** on your computer
2. **Commit changes**:
   ```bash
   git add .
   git commit -m "Update: Description of changes"
   git push origin main
   ```
3. **GitHub automatically rebuilds** (1-2 minutes)
4. **Refresh your site** to see changes

### Recommended Workflow:

```bash
# Create a new branch for features
git checkout -b feature/new-feature

# Make your changes
# Edit files...

# Commit changes
git add .
git commit -m "Add new feature"

# Push to GitHub
git push origin feature/new-feature

# Create Pull Request on GitHub
# Review and merge to main
# GitHub Pages automatically updates
```

## Custom Domain (Optional)

To use your own domain (e.g., aigrit.com.kh):

1. **Purchase domain** from a registrar
2. Go to repository **Settings → Pages**
3. Under "Custom domain", enter your domain
4. Configure your domain's DNS:
   - Add A records pointing to GitHub's IP addresses
   - Or use CNAME pointing to `username.github.io`
5. GitHub will automatically handle HTTPS

## Performance Optimization

### For Faster Loading:

1. **Compress Images**:
   - Use tools like TinyPNG or Squoosh
   - Save images in images/ folder

2. **Minimize CSS/JS** (optional):
   - Use MinifyCSS or MinifyJS online tools
   - Replace style.css and main.js

3. **Enable Browser Caching**:
   - GitHub Pages handles this automatically

## Monitoring & Analytics (Optional)

### Add Google Analytics:

1. Sign up at https://analytics.google.com
2. Create property for your site
3. Add this code before `</head>` in each HTML file:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Replace `GA_ID` with your tracking ID.

## SEO for GitHub Pages

### To Improve Search Rankings:

1. **Submit to Google Search Console**:
   - Go to https://search.google.com/search-console
   - Add your domain
   - Upload sitemap (generate at https://www.xml-sitemaps.com)

2. **Add Meta Tags** (already included):
   - Description
   - Keywords
   - Viewport

3. **Create sitemap.xml** and place in root:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://username.github.io/aigrit/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://username.github.io/aigrit/pages/about.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://username.github.io/aigrit/pages/products.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://username.github.io/aigrit/pages/services.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://username.github.io/aigrit/pages/contact.html</loc>
    <priority>0.8</priority>
  </url>
</urlset>
```

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| **404 Page Not Found** | Check file names match exactly (case-sensitive) |
| **CSS Not Loading** | Check paths are relative: `css/style.css` |
| **Images Not Showing** | Ensure images are in `images/` folder and linked correctly |
| **Contact Form Not Working** | Form is client-side only; consider Formspree integration |
| **Site Takes Too Long to Deploy** | GitHub Pages is processing; wait 5 minutes before checking |

## Formspree Integration (Optional - for Contact Form)

To make the contact form actually send emails:

1. Sign up at https://formspree.io
2. Create new project
3. Get your form endpoint
4. Update contact.html form action:

```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## Backup & Version Control Best Practices

```bash
# Before major changes, create a backup branch:
git checkout -b backup/before-major-update

# Work on main branch:
git checkout main

# Keep your work backed up in GitHub
git push origin main
```

## Security Notes

✓ **Safe to Share Publicly**:
- index.html
- CSS files
- JavaScript files
- Contact form (responses go to your email)

⚠️ **Never Commit**:
- API keys
- Database credentials
- Private contact information
- Sensitive data

(Use `.gitignore` file to prevent accidental commits)

## Success! 🎉

Your Aigrit website is now live on GitHub Pages!

### Next Steps:

1. **Share your URL**: `https://username.github.io/aigrit`
2. **Get feedback**: Send to friends/stakeholders
3. **Make improvements**: Update based on feedback
4. **Add features**: Implement online ordering, payments, etc.
5. **Monitor analytics**: Track visitor behavior

## Support & Resources

- **GitHub Pages Docs**: https://pages.github.com
- **GitHub Help**: https://help.github.com
- **HTML5 Guide**: https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS3 Guide**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript Guide**: https://developer.mozilla.org/en-US/docs/Web/JavaScript

---

**Aigrit Website Successfully Deployed!** 🚁🍞

For questions or support, contact:
- **Phone**: 099 499 7046
- **Email**: lengpovsry666@gmail.com
