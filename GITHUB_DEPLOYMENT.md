# Aigrit Website - GitHub Pages Deployment Guide

## Deployment Steps

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Sign in to your account
3. Click "+" → "New repository"
4. Name: `aigrit` (or your preferred name)
5. Description: "AI Autonomous Drone Delivery Bread Website"
6. Select "Public"
7. Click "Create repository"

### Step 2: Prepare Your Local Repository

```bash
# Navigate to the project directory
cd /Users/sry/Desktop/Aigrit

# Initialize git (if not already done)
git init

# Configure git
git config user.name "Leng Peou Sry"
git config user.email "lengpovsry666@gmail.com"

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Aigrit website with responsive design"
```

### Step 3: Connect to GitHub

```bash
# Add remote repository
git remote add origin https://github.com/yourusername/aigrit.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "GitHub Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select `main` branch and `/root` folder
6. Click "Save"
7. Wait 1-2 minutes for build to complete

### Step 5: Verify Deployment

1. Your site will be available at: `https://yourusername.github.io/aigrit`
2. Test all pages:
   - Homepage
   - About page
   - Products page
   - Services page
   - Contact page
3. Test on mobile devices
4. Verify responsive design

## Configuration Files

### _config.yml
Update with your GitHub username:
```yaml
url: https://yourusername.github.io
baseurl: /aigrit
```

### DNS & Custom Domain (Optional)

To use a custom domain:
1. Purchase domain (GoDaddy, Namecheap, etc.)
2. Go to repository Settings → Pages
3. Enter custom domain
4. Add DNS records:
   - CNAME: yourdomain.com → yourusername.github.io

## Responsive Design on GitHub Pages

✅ **Fully Responsive**
- All breakpoints working (mobile, tablet, desktop)
- Meta viewport tag included
- Flexible layouts with CSS Grid & Flexbox
- Touch-friendly navigation
- Optimized images

✅ **All Devices Supported**
- iPhone (all sizes)
- Android phones
- Tablets (iPad, Android)
- Laptops
- Desktop monitors
- Large displays (4K)

## Performance Tips

### Image Optimization
1. Compress images before uploading
2. Use appropriate file formats (WebP, SVG, JPEG, PNG)
3. Implement lazy loading for future images

### CSS Optimization
1. CSS is minified when built
2. Media queries are optimized
3. Unused CSS can be removed later

### JavaScript
1. Minimal JavaScript included
2. No external dependencies
3. Fast load times maintained

## Monitoring & Maintenance

### GitHub Pages Status
- Check build status in repository
- View deployment history
- Monitor for errors

### Testing
- Test after each update
- Check mobile responsiveness
- Verify all links work
- Test forms and interactions

### Updates
To update your site:
```bash
# Make changes to files
# Then commit and push
git add .
git commit -m "Update: [description of changes]"
git push origin main
```

## Troubleshooting

### Site Not Building
1. Check _config.yml syntax
2. Verify .yml file format (no tabs)
3. Check for excluded files
4. Review GitHub Pages settings

### Styles Not Loading
1. Verify CSS paths are correct
2. Check baseurl in _config.yml
3. Clear browser cache
4. Try incognito mode

### Responsive Issues
1. Check meta viewport tag
2. Verify media queries in CSS
3. Test in different browsers
4. Check for JavaScript errors

### Mobile Not Responsive
1. Verify viewport meta tag
2. Check touch target sizes
3. Test on actual device
4. Use Chrome DevTools device mode

## Useful Commands

```bash
# Check git status
git status

# View commit history
git log --oneline

# Stash changes
git stash

# Create new branch
git checkout -b feature-name

# Switch branch
git checkout main

# Delete local branch
git branch -d branch-name

# Push specific branch
git push origin branch-name

# Pull latest changes
git pull origin main
```

## Security Best Practices

✅ **Implemented**
- No credentials in files
- No API keys exposed
- HTTPS enabled (automatic)
- No external CDN vulnerabilities

⚠️ **Future Considerations**
- Enable branch protection
- Require pull requests
- Set up automated testing
- Enable security alerts

## Custom Domain Setup

### Using GoDaddy
1. Log into GoDaddy account
2. Go to DNS Management
3. Add A records:
   - IP: 185.199.108.153
   - IP: 185.199.109.153
   - IP: 185.199.110.153
   - IP: 185.199.111.153
4. Add CNAME:
   - yourdomain.com → yourusername.github.io

### Using Namecheap
1. Log into Namecheap account
2. Go to Domain List
3. Click Manage button
4. Go to Advanced DNS tab
5. Add A records and CNAME as above

## Deployment Checklist

- [ ] GitHub account created
- [ ] Repository created and connected
- [ ] All files committed and pushed
- [ ] GitHub Pages enabled
- [ ] Site accessible at public URL
- [ ] Responsive design tested
- [ ] All pages loading correctly
- [ ] Links working properly
- [ ] Forms functional
- [ ] Mobile view verified
- [ ] Tablet view verified
- [ ] Desktop view verified
- [ ] Contact information correct
- [ ] Social links working
- [ ] Analytics ready (optional)

## Post-Deployment

### Monitor Performance
- Check GitHub Pages build times
- Monitor 404 errors
- Review traffic statistics
- Test user experience

### Collect Feedback
- Share website with stakeholders
- Gather user feedback
- Note improvement suggestions
- Plan future enhancements

### Regular Maintenance
- Update content monthly
- Fix broken links
- Improve images
- Optimize performance
- Add new features

## Support

For issues or questions:
- **Email:** lengpovsry666@gmail.com
- **Phone:** 099 499 7046
- **GitHub:** Check issues and discussions

---

**Deployment Date:** January 23, 2026
**Website:** Aigrit - AI Autonomous Drone Delivery
**Built with:** HTML, CSS, JavaScript (Zero Dependencies)
