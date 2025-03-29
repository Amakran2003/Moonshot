# 🧠 Memory – Project Context: Zamra by Abderrazaq Makran

## 👨‍💻 Developer Profile

- **Name:** Abderrazaq Makran  
- **Role:** 2nd-year IT student at ALGOSUP  
- **Project type:** Personal Moonshot Project (required to validate my diploma)
- **Goal:** Build a complete SaaS ecosystem tailored for restaurants to digitize operations, showcasing my frontend, backend, architecture, UX/UI, and product-design skills.

---

## 📆 Project Timeline

| Date | Change | Description |
|------|--------|-------------|
| March 29, 2025 | Project Scaffold | Created initial monorepo structure with Turborepo using bolt.new |
| March 29, 2025 | Project Naming | Named the project "Zamra" while keeping "restaurant-platform" as the repository name |
| March 29, 2025 | README Setup | Created comprehensive README.md with project overview, features, and structure |
| March 29, 2025 | Environment Setup | Added .gitignore and .env.example files for project configuration |

## 🚀 Project Vision

My project, **Zamra**, goes far beyond a simple digital menu or ordering app. It's designed as a comprehensive SaaS **ecosystem** that helps restaurants modernize and streamline every aspect of their operations—from customer interactions to internal management and business analytics.

**Key points:**

- 🌐 **Multi-tenant SaaS:** Easily onboard and manage multiple restaurants.
- 🎨 **Modular design:** Scalable structure allowing easy customization for each restaurant.
- 🔄 **Real-time operations:** Live order tracking, status updates, stock monitoring.
- 📊 **Advanced analytics:** Revenue tracking, sales insights, financial summaries.
- 📱 **Cross-platform:** Responsive web apps and tablet-optimized interfaces for staff.
- 🎯 **Fully customizable:** Restaurant-specific branding, themes, and content.
- ⚙️ **Robust backend:** Secure authentication, real-time database, payments integration.

---

## 🏗️ Current Project Structure (Monorepo)
```
restaurant-platform/
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
│   ├── techspec.md
│   ├── functional.md
│   ├── testplan.md
│   └── management.md
│
├── .github/            # CI/CD workflows (deployment, testing)
├── .env                # Environment variables
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── turbo.json          # Turborepo configuration
└── README.md           # Project overview
```

---

## 📦 Current Package Structure

| Package | Description | Current State |
|---------|-------------|---------------|
| `@restaurant-platform/ui` | Shared UI library | Button component with variants |
| `@restaurant-platform/config` | Restaurant configurations | Basic config interface and defaults |
| `@restaurant-platform/utils` | Utility functions | Helper methods for common tasks |
| `@restaurant-platform/auth` | Authentication logic | Zustand store for auth state |

---

## 🧩 Detailed Description of Each Application

### 📱 `apps/client/` – Customer-facing website
- Interactive digital menu (photos, prices, ingredients)
- Ordering at table via QR codes (with optional delivery/pick-up integration)
- About us, contact info, hours, location (Google Maps integration)
- SEO optimized pages, dynamic meta tags, sitemap generation
- Fully responsive design, accessible, optimized for mobile devices
- Dynamic themes and branding per restaurant
- Real-time order status updates for customers

**Current Implementation:** Basic landing page with restaurant name and menu/order buttons

---

### 🍳 `apps/restaurant/` – Restaurant staff dashboard
- Real-time incoming orders management
- Order status updates (Received → Preparing → Ready → Delivered)
- Stock management (mark items unavailable, inventory alerts)
- Notifications for new orders (visual/audible)
- Optimized for tablet and touchscreen devices (potential React Native integration)
- Analytics: daily summary, popular dishes, peak hours

**Current Implementation:** Kitchen dashboard showing active/completed orders with motion transitions

---

### 🧠 `apps/admin/` – Super admin dashboard (for me)
- Onboard new restaurants easily
- Configure restaurant-specific content: menus, prices, themes, features
- Manage user permissions and roles (staff, admin, super-admin)
- Advanced analytics dashboard:
  - Revenue streams, sales analysis, item popularity
  - Income and expense tracking
  - Customer insights and feedback aggregation
- Export financial reports and statistics
- Global management settings (enable/disable features, monitor platform health)

**Current Implementation:** Admin interface with restaurant listing and mock statistics

---

## 🛠️ Technology Stack

| Layer                 | Technology Choices                                 |
|-----------------------|----------------------------------------------------|
| **Frontend**          | React 18.3.1, Vite 5.4.2, TypeScript 5.5.3         |
| **Styling/UI**        | Tailwind CSS 3.4.1                                 |
| **Animations**        | Framer Motion 11.0.8                               |
| **State Management**  | Zustand 4.5.2                                      |
| **Routing**           | React Router 6.22.2                                |
| **Authentication**    | Firebase Auth / Supabase Auth (planned)            |
| **Database & Backend**| Firestore / Supabase PostgreSQL (planned)          |
| **Real-time Updates** | Firestore real-time listeners or Socket.IO         |
| **Payments**          | Stripe                                             |
| **Localization (i18n)** | react-i18next                                    |
| **Deployment**        | Vercel, Firebase Hosting, GitHub Pages             |
| **Monorepo**          | Turborepo with npm workspaces                      |

---

## 🔮 Planned Technical Features and Scope

- Authentication logic in `packages/auth` (Firebase or Supabase)
- Multi-theme customization per restaurant
- RBAC: Roles and permissions management (staff, admin, super-admin)
- Stripe payment integration for online ordering
- Real-time stock management system
- Centralized and reusable UI component system
- Comprehensive documentation and CI/CD pipelines
- Performance optimization: lazy loading, asset compression, caching strategies
- Full analytics integration (income, sales, feedback)

---

## 📚 Documentation Roadmap

- **README.md:** Overview and instructions
- **techspec.md:** Technical architecture, stack details, APIs
- **functional.md:** Detailed functional specifications
- **testplan.md:** Testing strategies, unit and integration tests
- **management.md:** Roadmap, timeline, project tasks, milestones

---

## 🎯 Personal Goals and Future Plans

- Create a robust SaaS solution usable by real restaurants
- Leverage this project as a professional portfolio piece for internships, employment, or entrepreneurship
- Master complex, modular full-stack development (frontend, backend, and DevOps)
- Gain real-world product design and user experience expertise
- Potentially scale this SaaS into a commercial product beyond the academic setting

---

## 📝 Next Steps

- [ ] Update package names from "@restaurant-platform/" to "@zamra/"
- [ ] Expand UI components library with additional common components
- [ ] Implement authentication flow with role-based access
- [ ] Create restaurant configuration and theme system
- [ ] Build menu management system

---

**Last Updated:** March 29, 2025
