# GitHub Pages Deployment Guide for Newton's Group Blogs

This guide explains how to deploy the Newton's Group blogs site to GitHub Pages with your custom domain `blogs.newtons.in`.

## Repository Information

- **Repository**: https://github.com/shiva45678/newtons-blogs-site
- **Current Branch**: `main`
- **Build Output**: `dist/public/` directory
- **Custom Domain**: `blogs.newtons.in`

## Deployment Steps

### Step 1: Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub: https://github.com/shiva45678/newtons-blogs-site
2. Click on **Settings** (top navigation)
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Select branch: **main**
6. Select folder: **/ (root)** or **/docs** (depending on your preference)

### Step 2: Configure Custom Domain

1. In the **Pages** section, find the **Custom domain** field
2. Enter: `blogs.newtons.in`
3. Click **Save**

### Step 3: Update DNS Records

You need to configure your domain registrar to point to GitHub Pages. Add the following DNS records:

**For root domain (blogs.newtons.in):**

| Type | Name | Value |
|------|------|-------|
| A | blogs.newtons.in | 185.199.108.153 |
| A | blogs.newtons.in | 185.199.109.153 |
| A | blogs.newtons.in | 185.199.110.153 |
| A | blogs.newtons.in | 185.199.111.153 |

**For www subdomain (optional):**

| Type | Name | Value |
|------|------|-------|
| CNAME | www.blogs.newtons.in | shiva45678.github.io |

### Step 4: Build and Deploy

The site is already built in the `dist/public/` directory. To deploy:

1. **Option A: Manual Push**
   ```bash
   git push github main
   ```
   GitHub will automatically detect changes and deploy.

2. **Option B: Rebuild Before Pushing**
   ```bash
   pnpm build
   git add dist/
   git commit -m "Update build for deployment"
   git push github main
   ```

### Step 5: Enable HTTPS (Recommended)

1. Return to **Settings > Pages**
2. Check the box for **Enforce HTTPS**
3. Wait for SSL certificate to be provisioned (usually takes a few minutes)

## Build Process

To rebuild the site locally:

```bash
cd /home/ubuntu/newtons-blogs-site
pnpm install
pnpm build
```

The built files will be in `dist/public/`.

## Project Structure

```
newtons-blogs-site/
├── client/
│   ├── public/
│   │   └── CNAME                 # Custom domain configuration
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx          # Main blog page
│   │   ├── components/           # Reusable UI components
│   │   ├── App.tsx               # Main app component
│   │   └── index.css             # Global styles
│   └── index.html
├── dist/
│   └── public/                   # Build output (deploy this)
├── package.json
└── vite.config.ts
```

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Blog Grid**: 12 sample posts with category filtering
- **Brand Sections**: Dedicated sections for Newton's AI, Hospitals, HMS, and NEET PG
- **Modern UI**: Professional healthcare design with smooth animations
- **Fast Loading**: Optimized build with code splitting

## Troubleshooting

### Custom Domain Not Working

1. Verify DNS records are correctly configured (can take up to 48 hours to propagate)
2. Check that `CNAME` file exists in `client/public/CNAME`
3. Ensure GitHub Pages is enabled in repository settings

### Build Errors

1. Clear node_modules: `rm -rf node_modules pnpm-lock.yaml`
2. Reinstall dependencies: `pnpm install`
3. Rebuild: `pnpm build`

### Site Not Updating

1. Hard refresh your browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Check GitHub Actions for deployment status
3. Verify the build completed successfully

## Maintenance

### Updating Content

1. Edit blog posts in `client/src/pages/Home.tsx`
2. Rebuild: `pnpm build`
3. Push changes: `git push github main`

### Adding New Pages

1. Create new page in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Rebuild and push

## Support

For more information about GitHub Pages, visit: https://docs.github.com/en/pages

For Newton's Group inquiries, contact: support@newtons.in
