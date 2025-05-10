# 🐾 Pata Mia - Frontend

**Connecting pet lovers with trusted professionals**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15.0+-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript)](https://www.typescriptlang.org/)

## 🌟 Overview

Pata Mia is the premier platform bridging the gap between pet owners and certified veterinary professionals/caregivers. Our solution offers:

**For Professionals**  
✅ Publish and manage your services  
✅ Handle appointments seamlessly  
✅ Receive secure payments

**For Pet Owners**  
🔍 Discover verified caregivers  
📅 Schedule services with confidence  
💳 Secure payment processing

_"We care for your pets like family"_

## 🛠 Tech Stack

### Core Framework

- **Next.js 15** (App Router) - Optimal SSR/SSG capabilities
- **TypeScript** - Type-safe development

### Styling

- **TailwindCSS** - Utility-first CSS framework
- **Ant Design** - Enterprise-grade UI components (Tailwind-based)

### Advanced Features

- **WebSocket** - Real-time notifications and updates
- **Tanstack React Query** - Data fetching and state management

## 🚀 Quick Start

### Prerequisites

- Node.js ≥ 18.x
- npm ≥ 9.x
- Git

## 📁 Project Structure

```
pet-ware-front/
├── app/                      # Next.js 15 App Router
│   ├── (auth)/               # Authentication routes
│   ├── (professional)/       # Professional dashboard
│   └── (client)/             # Client-facing routes
├── components/
│   ├── commons/              # Shared UI (Buttons, Cards)
│   ├── modal/                # Dialog components
│   └── auth/                 # Auth-specific components
├── services/
│   ├── AuthService.ts        # Services logic (class service fetch)
├── hooks/
│   ├── useOpen.ts            # Authentication methods
├── models/                   # TypeScript interfaces
│   ├── user.ts               # User types
│   └── payment.ts            # Transaction types
├── public/                   # Static assets
└── styles/                   # Global CSS/Tailwind config
```

### Installation

```bash
git clone https://github.com/Afrozens/pet-ware-frontend.git
cd pet-ware-frontend
npm install
cp .env.example .env.local  # Configure your environment variables
npm run dev
```
