# Technical Specification

## Architecture Overview

This monorepo contains three main applications and shared packages:

### Applications

1. **Client App** (`apps/client`)
   - Public-facing website for restaurant customers
   - Features: menu viewing, table ordering, delivery options
   - Tech stack: React, TypeScript, Tailwind CSS, Framer Motion

2. **Restaurant Dashboard** (`apps/restaurant`)
   - Internal dashboard for restaurant staff
   - Features: order management, kitchen display system
   - Tech stack: Same as client app

3. **Admin Dashboard** (`apps/admin`)
   - Super admin interface for platform management
   - Features: restaurant onboarding, configuration, analytics
   - Tech stack: Same as client app

### Shared Packages

1. **UI Package** (`packages/ui`)
   - Shared component library
   - Styled with Tailwind CSS
   - Includes animations with Framer Motion

2. **Config Package** (`packages/config`)
   - Restaurant-specific configuration
   - Theme customization
   - Feature flags

3. **Utils Package** (`packages/utils`)
   - Shared utility functions
   - Type definitions
   - Constants

4. **Auth Package** (`packages/auth`)
   - Authentication logic
   - Role-based access control
   - Session management

## Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Routing**: React Router
- **Animations**: Framer Motion
- **Package Management**: npm workspaces
- **Monorepo Management**: Turborepo

## Development Guidelines

1. All new components should be created in the UI package if they're shared
2. Use TypeScript strictly - no `any` types
3. Follow the component-driven development approach
4. Write unit tests for shared components
5. Document all shared utilities and components