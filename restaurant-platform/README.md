# Zamra 🍽️

[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-purple.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-38b2ac.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red.svg)](./LICENSE)
[![Status](https://img.shields.io/badge/Status-In%20Development-orange.svg)]()

> A comprehensive SaaS ecosystem called Zamra that helps restaurants modernize and streamline every aspect of their operations—from customer interactions to internal management and business analytics.

<p align="center">
  <img src="docs/images/restaurant-platform-banner.png" alt="Zamra Banner" width="600">
</p>

## Table of Contents

- [Zamra 🍽️](#zamra-️)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
    - [Customer App](#customer-app)
    - [Restaurant Dashboard](#restaurant-dashboard)
    - [Admin Panel](#admin-panel)
  - [Technology Stack](#technology-stack)
  - [Project Structure](#project-structure)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
  - [Usage](#usage)
    - [Running Applications](#running-applications)
    - [Building for Production](#building-for-production)
  - [Key Advantages](#key-advantages)
  - [Documentation](#documentation)
  - [Roadmap](#roadmap)
  - [Author](#author)
  - [License](#license)
  - [Copyright Notice](#copyright-notice)

## Overview

Zamra is a modular, scalable SaaS solution that goes far beyond a simple digital menu or ordering app. It connects three critical aspects of the restaurant business:

- **Customer Experience** - Digital menu viewing, table ordering, and reservations
- **Restaurant Operations** - Order management, kitchen display system, and staff coordination
- **Platform Administration** - Restaurant onboarding, configuration, analytics, and multi-tenant management

**Key points:**

- 🌐 **Multi-tenant SaaS:** Easily onboard and manage multiple restaurants
- 🎨 **Modular design:** Scalable structure allowing easy customization per restaurant
- 🔄 **Real-time operations:** Live order tracking, status updates, stock monitoring
- 📊 **Advanced analytics:** Revenue tracking, sales insights, financial summaries
- 📱 **Cross-platform:** Responsive web apps and tablet-optimized interfaces for staff
- 🎯 **Fully customizable:** Restaurant-specific branding, themes, and content
- ⚙️ **Robust backend:** Secure authentication, real-time database, payments integration

## Features

### Customer App
- Interactive digital menus with rich media (photos, prices, ingredients)
- In-restaurant table ordering via QR codes (with delivery/pick-up integration)
- Table reservations and waitlist management
- Order tracking and status updates
- About us, contact info, hours, location (Google Maps integration)
- SEO optimized pages, dynamic meta tags, sitemap generation
- Fully responsive design, accessible, optimized for mobile devices
- Dynamic themes and branding per restaurant

### Restaurant Dashboard
- Real-time incoming orders management
- Order status updates (Received → Preparing → Ready → Delivered)
- Stock management (mark items unavailable, inventory alerts)
- Notifications for new orders (visual/audible)
- Optimized for tablet and touchscreen devices
- Analytics: daily summary, popular dishes, peak hours
- Staff management and task assignment

### Admin Panel
- Onboard new restaurants easily
- Configure restaurant-specific content: menus, prices, themes, features
- Manage user permissions and roles (staff, admin, super-admin)
- Advanced analytics dashboard:
  - Revenue streams, sales analysis, item popularity
  - Income and expense tracking
  - Customer insights and feedback aggregation
- Export financial reports and statistics
- Global management settings (enable/disable features, monitor platform health)

## Technology Stack

This project leverages modern web technologies to deliver a performant and maintainable application:

| Layer                 | Technology Choices                                 |
|-----------------------|----------------------------------------------------|
| **Frontend**          | React 18, Vite, TypeScript                         |
| **Styling/UI**        | Tailwind CSS, shadcn/ui                            |
| **Animations**        | Framer Motion                                      |
| **State Management**  | Zustand                                            |
| **Routing**           | React Router                                       |
| **Authentication**    | Firebase Auth / Supabase Auth                      |
| **Database & Backend**| Firestore / Supabase PostgreSQL                    |
| **Real-time Updates** | Firestore real-time listeners or Socket.IO         |
| **Payments**          | Stripe                                             |
| **Localization (i18n)** | react-i18next                                    |
| **Deployment**        | Vercel, Firebase Hosting, GitHub Pages             |
| **Monorepo**          | Turborepo with npm workspaces                      |

## Project Structure

The project follows a monorepo architecture to maximize code reuse and maintain clear separation of concerns:

```
zamra/
├── apps/
│   ├── client/         # Public website for customers
│   ├── restaurant/     # Restaurant staff dashboard
│   └── admin/          # Central admin panel for managing restaurants
│
├── packages/
│   ├── ui/             # Shared UI components (buttons, cards, layouts)
│   ├── config/         # Dynamic restaurant-specific configurations (themes, menus)
│   ├── utils/          # Common utility functions (formatting prices, dates, etc.)
│   └── auth/           # Centralized authentication logic (Firebase or Supabase)
│
├── docs/               # Project documentation
│   ├── techspec.md     # Technical architecture, stack details, APIs
│   ├── functional.md   # Detailed functional specifications
│   ├── testplan.md     # Testing strategies, unit and integration tests
│   └── management.md   # Roadmap, timeline, project tasks, milestones
│
├── .github/            # CI/CD workflows (deployment, testing)
├── .env                # Environment variables
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── turbo.json          # Turborepo configuration
└── README.md           # Project overview
```

## Installation

### Prerequisites

- Node.js 18+ and npm

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AbderrazaqMakran/Zamra.git
   cd Zamra
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Running Applications

Start the client application:
```bash
npm run dev:client
```

Start the restaurant dashboard:
```bash
npm run dev:restaurant
```

Start the admin interface:
```bash
npm run dev:admin
```

### Building for Production

Build all applications:
```bash
npm run build
```

## Key Advantages

- **Modular Architecture**: Clear separation between applications with shared code in packages
- **Scalable Infrastructure**: Built to handle multiple restaurants with varying configurations
- **Developer Experience**: Type-safe development with TypeScript and modern tooling
- **Code Reusability**: Shared UI components and utilities across applications
- **Maintainable Codebase**: Well-structured project with consistent patterns
- **Customizability**: Theme and configuration system for restaurant-specific branding
- **Performance Focused**: Optimized builds with Vite for fast loading experiences

## Documentation

For detailed documentation on the architecture, development workflow, and component usage, see the [docs folder](./docs/):

- **techspec.md**: Technical architecture, stack details, APIs
- **functional.md**: Detailed functional specifications
- **testplan.md**: Testing strategies, unit and integration tests
- **management.md**: Roadmap, timeline, project tasks, milestones

## Roadmap

- [ ] Complete core UI components
- [ ] Implement authentication logic (Firebase or Supabase)
- [ ] Create multi-theme customization per restaurant
- [ ] Develop RBAC (Roles and permissions management)
- [ ] Integrate Stripe payment for online ordering
- [ ] Build real-time stock management system
- [ ] Implement menu management system
- [ ] Create order processing workflow
- [ ] Add restaurant analytics dashboard
- [ ] Implement multi-language support
- [ ] Add performance optimizations (lazy loading, asset compression, caching)
- [ ] Add offline mode capabilities
- [ ] Develop mobile companion apps
- [ ] Set up CI/CD pipelines

## Author

**Abderrazaq Makran** - Second-year IT student at ALGOSUP

This project, Zamra, is being developed as a Moonshot project for diploma validation at ALGOSUP, showcasing frontend, backend, architecture, UX/UI, and product-design skills.

## License

This project is protected under a restricted license that reserves all rights to the author.
Use, reproduction, or distribution without explicit permission is prohibited - see the [LICENSE](./LICENSE) file for details.

## Copyright Notice

This is the Moonshot project of **Abderrazaq Makran**, a second-year student at ALGOSUP.  
The code provided here is publicly visible for **educational evaluation purposes only**.  
You **may not** use, copy, or distribute this software without explicit written permission from the author.

This project represents significant intellectual property with potential commercial applications.
While the repository is publicly viewable for academic assessment, all rights to the code, design,
and concept are exclusively reserved by the author.

All rights reserved. © 2024 Abderrazaq Makran