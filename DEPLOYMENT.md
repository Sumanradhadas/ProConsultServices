# 🚀 Deployment Guide for ProConsult Services

This is a static website ready for deployment to Netlify or any static hosting service.

## Quick Deploy to Netlify

### Method 1: Netlify Drop (Easiest - No Account Required)

1. **Build the site locally:**
   ```bash
   npx vite build
   ```

2. **Deploy via drag & drop:**
   - Go to https://app.netlify.com/drop
   - Drag and drop the `dist/public` folder
   - Your site is live! 🎉

### Method 2: Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the site:**
   ```bash
   npx vite build
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod --dir=dist/public
   ```

### Method 3: GitHub + Netlify (Best for Continuous Deployment)

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Netlify auto-detects settings from `netlify.toml`
   - Click "Deploy site"
   - Automatic deployments on every push! 🚀

## Deploy to Other Platforms

### Vercel
```bash
npm install -g vercel
npx vite build
vercel --prod
```

### GitHub Pages
```bash
npx vite build --base=/your-repo-name/
# Upload dist/public folder to gh-pages branch
```

### Cloudflare Pages
1. Build: `npx vite build`
2. Upload `dist/public` folder to Cloudflare Pages

## Contact Form Setup

The contact form uses **Formspree** for handling submissions:

1. Go to https://formspree.io and create a free account
2. Create a new form
3. Copy your form endpoint (looks like: `https://formspree.io/f/xpwagyzk`)
4. Update `client/src/components/ContactForm.tsx` line 27:
   ```typescript
   const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID";
   ```
5. Rebuild and redeploy

**Alternative:** Use Netlify Forms (if deploying to Netlify):
- No configuration needed
- Add `netlify` attribute to form tag
- See: https://docs.netlify.com/forms/setup/

## Build Locally for Testing

```bash
# Build the production site
npx vite build

# Preview the production build
npx vite preview --port 5000

# Open http://localhost:5000 in your browser
```

## File Structure After Build

```
dist/public/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── images...
└── _redirects (for client-side routing)
```

## Environment Variables

No environment variables needed! This is a 100% static site.

## Custom Domain

After deploying to Netlify:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow Netlify's instructions to configure DNS

## Performance Tips

✅ All images are optimized
✅ Code splitting enabled
✅ CSS is minified
✅ No external dependencies to slow down loading
✅ Responsive images for different screen sizes

## Troubleshooting

**Problem:** 404 errors on page refresh
**Solution:** Make sure `_redirects` file is in the build output (already configured)

**Problem:** Contact form doesn't work
**Solution:** Set up Formspree endpoint (see Contact Form Setup above)

**Problem:** Images don't load
**Solution:** Make sure `attached_assets` folder is included in the build

## Support

Need help? Check out:
- [Netlify Documentation](https://docs.netlify.com)
- [Vite Documentation](https://vitejs.dev)
- [Formspree Documentation](https://help.formspree.io)

---

**Built with ❤️ by [WebGlow](https://webglowx.onrender.com/)**
