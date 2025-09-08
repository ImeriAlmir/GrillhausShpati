# Grillhaus Shpati Restaurant Website

## Overview

A modern restaurant website for Grillhaus Shpati, a Balkan grill house located in Baden, Austria. The application is built as a full-stack web application featuring a React frontend with a Node.js/Express backend. The site showcases the restaurant's menu, location, and contact information with a focus on authentic Balkan cuisine specialties like Cevapcici and Pljeskavica.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent design
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Hookform Resolvers for validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for menu data retrieval
- **Build Process**: esbuild for server-side bundling and tsx for development

### Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Fallback Storage**: In-memory storage implementation for development/testing

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Menu Items Table**: Restaurant menu with categories (essen/getränke), names, prices, and descriptions
- **Shared Schema**: TypeScript types and Zod validation schemas for type safety

### Development and Build Configuration
- **Development Server**: Vite dev server with HMR and React plugin
- **Production Build**: Static site generation with Express server for API routes
- **TypeScript Configuration**: Strict mode with path mapping for clean imports
- **Code Quality**: ESM modules with strict TypeScript checking

## External Dependencies

### UI and Styling
- **Radix UI**: Complete set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for creating variant-based component APIs

### Data Management
- **TanStack Query**: Server state management, caching, and data fetching
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL adapter
- **Drizzle Zod**: Integration between Drizzle and Zod for runtime validation
- **Zod**: Schema validation library for TypeScript

### Database and Infrastructure
- **Neon Database**: Serverless PostgreSQL database hosting
- **PostgreSQL**: Primary database with connection pooling

### Development Tools
- **Vite**: Fast build tool with React plugin and TypeScript support
- **esbuild**: Fast JavaScript bundler for production builds
- **tsx**: TypeScript execution environment for development
- **Replit Integration**: Runtime error overlay and cartographer plugins for Replit environment

### Form and Input Handling
- **React Hook Form**: Performant forms with minimal re-renders
- **Hookform Resolvers**: Validation resolvers for React Hook Form

### Utilities
- **date-fns**: Date utility library for internationalization
- **clsx/cn**: Conditional className utility for component styling
- **nanoid**: Unique ID generation for components and data