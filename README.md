# ProConsult Services

A professional business consulting website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, professional design with navy and golden accents
- 📱 Fully responsive layout for all devices
- 🚀 Static site - ready for Netlify deployment
- 📧 Contact form with Formspree integration
- ⚡ Fast performance with Vite
- 🎯 SEO optimized

## Pages

- **Home** - Hero section, services preview, about snapshot, testimonials
- **About Us** - Company story, team profiles, why choose us
- **Services** - Detailed service offerings with features
- **Clients** - Client logos and testimonials
- **Contact** - Contact form with map integration

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to Netlify

### Option 1: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the site
npm run build

# Deploy
netlify deploy --prod --dir=dist/public
```

### Option 2: Connect to Git
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Netlify will auto-detect the settings from `netlify.toml`
6. Click "Deploy site"

### Option 3: Drag and Drop
1. Run `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist/public` folder to deploy

## Contact Form Setup

The contact form uses Formspree for handling submissions. To set up:

1. Go to [Formspree](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Copy your form endpoint
5. Update `client/src/components/ContactForm.tsx` line 17 with your endpoint:
   ```typescript
   const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID";
   ```

## Technology Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Build Tool**: Vite
- **Routing**: Wouter
- **Forms**: React Hook Form, Zod validation
- **Icons**: Lucide React

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   └── lib/            # Utilities
│   └── public/             # Static assets
├── attached_assets/        # Generated images
├── netlify.toml           # Netlify configuration
└── README.md
```

## Credits

Designed & Developed by [WebGlow](https://webglowx.onrender.com/)

## License

MIT
