# Deployment Guide for Brew Haven

## GitHub Pages Deployment

### Automatic Deployment (Recommended)

1. **Fork or clone this repository** to your GitHub account

2. **Enable GitHub Actions permissions**:
   - Go to repository Settings → Actions → General
   - Under "Workflow permissions", select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Set Source to "Deploy from a branch"
   - Select "docs" branch and "/ (root)" folder
   - The workflow will automatically build and deploy to docs branch on push to main

3. **Your site will be available at**: `https://yourusername.github.io/brew-haven`

### Manual Deployment to docs branch

If you prefer manual deployment to GitHub Pages docs branch:

1. **Run the deployment script**:
   ```bash
   ./deploy-to-docs.sh
   ```

2. **Push the docs branch**:
   ```bash
   git push origin docs
   ```

3. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Set Source to "Deploy from a branch"
   - Select "docs" branch and "/ (root)" folder

### Manual Deployment to Other Hosts

For other hosting providers:

1. **Build the static site**:
   ```bash
   npm run build
   ```

2. **Deploy the `dist/public` folder** to your hosting provider

## Alternative Hosting Options

### Vercel
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build:static`
3. Set output directory: `dist/public`
4. Deploy automatically on push

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build:static`
3. Set publish directory: `dist/public`
4. Deploy automatically on push

### Traditional Web Hosting
1. Build the project: `npm run build:static`
2. Upload contents of `dist/public` to your web server
3. Configure server to serve `index.html` for all routes (SPA routing)

## Custom Domain Setup

### GitHub Pages with Custom Domain
1. Add a `CNAME` file to the repository root with your domain
2. Configure DNS A records to point to GitHub Pages IPs
3. Enable HTTPS in repository settings

### Other Providers
Follow your hosting provider's documentation for custom domain configuration.

## Performance Optimization

### Image Optimization
- Images are already optimized for web
- Consider using WebP/AVIF formats for better compression
- Implement responsive images for different screen sizes

### CDN Configuration
- Use a CDN for faster global delivery
- Configure proper cache headers for static assets
- Enable Brotli/Gzip compression

## Monitoring and Analytics

### Google Analytics
Add your tracking ID to the HTML template or use a React analytics library.

### Performance Monitoring
- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Set up error tracking with services like Sentry

## Troubleshooting

### Common Issues
1. **Git error 128 (permission denied)**: Ensure GitHub Actions has write permissions in repository settings
2. **Jekyll processing error**: Add `.nojekyll` file to disable Jekyll (included in deployment scripts)
3. **Blank page after deployment**: Check browser console for errors
4. **Images not loading**: Verify asset paths are correct
5. **Routing issues**: Ensure server serves index.html for all routes

### Build Errors
- Clear node_modules and reinstall dependencies
- Check Node.js version compatibility (18+)
- Verify all required environment variables are set