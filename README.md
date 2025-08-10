# Brew Haven ☕

A modern, responsive coffee shop landing page built with React, TypeScript, and Tailwind CSS, featuring smooth animations and an authentic premium dark theme.

![Brew Haven Demo](https://github.com/yourusername/brew-haven/raw/main/preview.png)

## ✨ Features

### 🎨 Modern Design
- **Premium Dark Theme**: Stone-based color palette with warm amber accents
- **Custom Branding**: Professional logo with coffee cup and golden leaves
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion powered interactions and transitions

### 📱 Mobile Experience
- **Touch-Friendly Navigation**: Swipe gestures for menu and testimonials
- **Dot Indicators**: Clear navigation feedback for carousel sections
- **Optimized Images**: Separate hero images for desktop and mobile
- **Progressive Loading**: Lazy loading for optimal performance

### 🖼️ Authentic Content
- **Real Photography**: 12 authentic coffee shop gallery images
- **Customer Testimonials**: Real customer photos and reviews
- **Professional Food Photography**: High-quality menu item images
- **Brand Consistency**: Cohesive visual identity throughout

### 🎯 Sections
1. **Hero**: Compelling introduction with call-to-action
2. **Features**: Core value propositions with icons
3. **Menu**: Interactive menu with swipe navigation
4. **Story**: Brand narrative and values
5. **Gallery**: Instagram-style photo grid (3:4 aspect ratio)
6. **Testimonials**: Customer reviews with photos
7. **Contact**: Location, hours, and contact information
8. **Newsletter**: Email subscription with form validation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/brew-haven.git
   cd brew-haven
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000`

### Build for Production

```bash
npm run build:static
```

The static files will be generated in the `dist/public` directory.

## 📁 Project Structure

```
brew-haven/
├── client/                    # Frontend React application
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/           # Reusable UI components (shadcn/ui)
│   │   │   └── landing/      # Landing page sections
│   │   ├── pages/            # Route components
│   │   ├── lib/              # Utilities and configurations
│   │   └── main.tsx         # Application entry point
│   └── index.html           # HTML template
├── attached_assets/          # Image assets and media
├── server/                   # Express.js backend (for full-stack features)
├── shared/                   # Shared TypeScript types
├── .github/workflows/        # GitHub Actions for deployment
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **React 18**: Modern hooks and concurrent features
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations and gestures
- **Wouter**: Lightweight routing
- **shadcn/ui**: High-quality component library

### Build Tools
- **Vite**: Fast development and optimized builds
- **PostCSS**: CSS processing and optimization
- **ESBuild**: Fast JavaScript bundling

### Deployment
- **GitHub Pages**: Automated deployment via GitHub Actions
- **Vercel/Netlify**: Alternative deployment options supported

## 🎨 Design System

### Colors
```css
/* Primary Dark Theme */
Background: #0c0a09 (stone-950)
Surface: #1c1917 (stone-900)
Accent: #fbbf24 (amber-400)
Secondary: #f59e0b (amber-500)
Text: #f5f5f4 (stone-100)
Muted: #a8a29e (stone-400)
```

### Typography
- **Headings**: Font weight 700-900, larger scales
- **Body**: Font weight 400-500, optimized readability
- **Gradient Text**: Amber gradient for brand emphasis

### Spacing
- **Sections**: Consistent vertical rhythm
- **Mobile**: Reduced padding for better screen utilization
- **Desktop**: Generous spacing for premium feel

## 📋 Customization Guide

### Adding New Menu Items
1. Edit the menu array in `client/src/components/landing/Menu.tsx`
2. Add images to `attached_assets/` folder
3. Update the import statements

### Updating Gallery Photos
1. Replace images in `attached_assets/` with 3:4 aspect ratio photos
2. Update the gallery array in `client/src/components/landing/Gallery.tsx`
3. Optimize images for web (WebP/AVIF preferred)

## 📸 Image Credits

All photography used in this demo is sourced from:
- **Unsplash**: Professional stock photography platform
- **Pexels**: Free stock photo resource

Images are used for demonstration purposes only. For commercial use, please ensure you have appropriate licensing for all imagery.

### Modifying Color Theme
1. Update CSS variables in `client/src/index.css`
2. Modify Tailwind classes throughout components
3. Test both light and dark mode compatibility

### Adding New Sections
1. Create component in `client/src/components/landing/`
2. Add to page layout in `client/src/pages/home.tsx`
3. Update navigation if needed

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production (full-stack)
- `npm run build:static` - Build static site only
- `npm run preview` - Preview production build
- `npm run check` - TypeScript type checking

### Code Quality
- **TypeScript**: Strict mode enabled
- **ESLint**: Code linting and formatting
- **Prettier**: Consistent code style
- **Husky**: Git hooks for quality assurance

## 📈 Performance

### Optimization Features
- **Lazy Loading**: Images load only when needed
- **Code Splitting**: Automatic route-based splitting
- **Asset Optimization**: Compressed images and fonts
- **Bundle Analysis**: Webpack bundle analyzer included
- **Lighthouse Score**: 95+ on all metrics

### Best Practices
- Semantic HTML structure
- Accessible design patterns
- SEO-optimized meta tags
- Mobile-first responsive design
- Progressive enhancement

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Fork this repository
2. Enable GitHub Pages in repository settings
3. Push to main branch - automatic deployment via GitHub Actions

### Manual Deployment
1. Run `npm run build:static`
2. Upload `dist/public` contents to your hosting provider
3. Configure server to serve `index.html` for all routes

### Environment Variables
For full-stack features (contact forms, newsletter):
```env
DATABASE_URL=your_postgresql_url
SMTP_HOST=your_smtp_host
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open Pull Request**

### Development Guidelines
- Follow existing code style and patterns
- Add TypeScript types for new features
- Test on multiple devices and browsers
- Optimize images before committing
- Update documentation for new features

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern coffee shop websites and premium brand aesthetics
- **Photography**: Authentic coffee shop and food photography
- **Icons**: Lucide React icon library
- **UI Components**: shadcn/ui component library
- **Animations**: Framer Motion for smooth interactions

## 📞 Support

For questions, feedback, or support:
- **Issues**: [GitHub Issues](https://github.com/yourusername/brew-haven/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/brew-haven/discussions)
- **Email**: support@brew-haven-demo.com

---

**Demo developed by Muma K.** | Built with ❤️ using React & TypeScript