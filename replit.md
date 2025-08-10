# Project Documentation

## Overview

This is a full-stack TypeScript React coffee shop website application called "Brew Haven". The project features a modern web application with a React frontend, Express.js backend, and PostgreSQL database integration using Drizzle ORM. The application presents a coffee shop's landing page with multiple sections including hero, features, menu, story, gallery, testimonials, contact, and newsletter signup.

## Recent Changes (January 2025)

- **Authentic Gallery**: Updated with 12 real coffee shop photos showing actual customer experiences, food, and atmosphere
- **Customer Testimonials**: Added real customer photos for Sarah Chen, Marcus Rodriguez, Amanda Foster (formerly Amy), and David Kim
- **Mobile Experience**: Implemented swipe-based navigation for menu and testimonials with dot indicators
- **Brand Integration**: Added custom Brew Haven logo with loading screen and favicon
- **Responsive Design**: Separate hero images for desktop/mobile with optimized compositions
- **UI Refinements**: Removed non-functional buttons, improved text formatting, reduced section padding
- **Developer Credit**: Added "Demo developed by Muma K." at bottom of website
- **GitHub Pages Optimization**: Removed Replit dev banner, cleaned up unused files, added GitHub Actions workflow
- **Documentation**: Created comprehensive README.md, LICENSE, and DEPLOYMENT.md for open source distribution

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The frontend is built with React 18 and TypeScript, utilizing a modern component-based architecture:

- **UI Framework**: React with TypeScript support
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

The frontend follows a component-driven approach with reusable UI components organized in the `@/components/ui` directory. The main application pages are structured as landing page sections, creating a single-page application experience.

### Backend Architecture

The backend implements a RESTful API using Express.js with TypeScript:

- **Runtime**: Node.js with ES modules
- **Framework**: Express.js for HTTP server and API routes
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for optimized server bundling

The server architecture includes middleware for JSON parsing, URL encoding, request logging, and error handling. Routes are organized in a modular fashion with a dedicated routes file.

### Data Storage Solutions

The application uses a PostgreSQL database with Drizzle ORM for type-safe database operations:

- **Database**: PostgreSQL (configured for Neon Database)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Migrations**: Drizzle Kit for schema migrations
- **Schema**: Defined in shared TypeScript files for type consistency across frontend and backend
- **Connection**: Neon Database serverless PostgreSQL connection

The current schema includes a users table with basic authentication fields. The storage layer implements an abstraction pattern with both in-memory storage (for development) and database storage interfaces.

### Authentication and Authorization

Basic user authentication infrastructure is in place:

- **User Model**: Username and password-based authentication
- **Storage Interface**: Abstracted user CRUD operations
- **Session Management**: Prepared for PostgreSQL session storage using connect-pg-simple

### Development and Build Process

The project uses a monorepo structure with shared types and utilities:

- **Shared Types**: Common TypeScript definitions in the `shared` directory
- **Development**: Concurrent frontend and backend development with hot reloading
- **Build Process**: Separate builds for frontend (Vite) and backend (esbuild)
- **Type Safety**: Comprehensive TypeScript configuration with strict mode enabled

## External Dependencies

### Core Framework Dependencies

- **@neondatabase/serverless**: Serverless PostgreSQL database connection for Neon Database
- **drizzle-orm**: Type-safe SQL toolkit and ORM for TypeScript
- **drizzle-zod**: Zod schema validation integration for Drizzle
- **express**: Web application framework for Node.js

### Frontend Dependencies

- **React Ecosystem**: React 18, React DOM, and TypeScript support
- **UI Components**: Extensive Radix UI primitive components for accessible UI elements
- **Styling**: Tailwind CSS with utility classes and custom design tokens
- **Animations**: Framer Motion for declarative animations
- **State Management**: TanStack React Query for server state synchronization
- **Form Handling**: React Hook Form with Hookform Resolvers for form validation

### Development Tools

- **Build Tools**: Vite for frontend builds, esbuild for backend compilation
- **Development**: tsx for TypeScript execution, various Vite plugins for enhanced development experience
- **Code Quality**: TypeScript with strict configuration for type safety
- **Replit Integration**: Specialized plugins for Replit development environment support

### Database and Session Management

- **Database**: PostgreSQL with Neon Database serverless connection
- **ORM**: Drizzle ORM with PostgreSQL dialect and migration support
- **Session Storage**: connect-pg-simple for PostgreSQL-backed session management
- **Validation**: Zod for runtime type validation and schema validation

The application is optimized for deployment on GitHub Pages with automated CI/CD workflows, while maintaining the full-stack architecture for potential server-side features. The project includes comprehensive documentation and is structured for easy extension with additional features like user authentication, order management, and content management capabilities.