# 🚀 WordPress to Vercel: Serverless Edge Migration

An architectural showcase demonstrating the complex migration of a dynamic WordPress monolith to a lightning-fast, headless static architecture deployed on Vercel. 

This repository contains the statically generated front-end assets for **Unique Hands Handyman Services LLC**. The project was undertaken to rescue the website from severe latency and reliability issues on legacy shared hosting, transforming it into a zero-maintenance, high-performance web application.

---

## 📊 The Challenge vs. The Solution

The traditional WordPress stack requires PHP and MySQL to render pages on every request. When hosted on low-tier shared infrastructure, this results in database timeouts and poor UX. By decoupling the front-end from the backend, we achieve enterprise-grade speed for free.

| Metric / Feature | ❌ Legacy Setup (InfinityFree) | ✨ Modern Architecture (Vercel) |
| :--- | :--- | :--- |
| **Infrastructure** | Shared PHP/MySQL Server | Global Edge CDN |
| **Page Load Time** | 3.0s - 8.0s (Variable) | **< 0.5s (Pre-rendered)** |
| **Database Downtime** | Frequent (Throttled limits) | **Zero (Stateless HTML/CSS)** |
| **Security** | Vulnerable to WP exploits | **Immutable & Secure** |
| **Maintenance** | Requires plugin/core updates | **Zero-maintenance deployment** |

---

## 🛠️ Technical Implementation & Workflow

Migrating a dynamic WordPress site to Vercel requires bypassing Vercel's lack of native PHP support. Here is the engineering approach I took to solve this:

### 1. 🐳 Isolated Local Containerization
Extracted the broken production codebase and spun it up within a secure, containerized local environment using **LocalWP**. This provided a stable PHP/Nginx sandbox without live server restrictions.

### 2. 🗄️ Manual Database Reconstruction
Bypassed corrupted auto-import sequences caused by caching plugins (LiteSpeed). I manually flushed the local MySQL environment and injected the core `wp_` tables via **Adminer**, fully restoring the site's data structure and media links.

### 3. ⚙️ Static Site Generation (SSG)
Engineered a complete bypass of the WordPress PHP rendering engine. Utilizing static generation tools, I crawled the local database and converted all dynamic routes, pages, and assets into a pure, lightweight HTML/CSS/JS bundle. Optimized pagination safety limits to ensure deep-link extraction.

### 4. 🌐 CI/CD & Edge Deployment
Pushed the compiled static directory to a Git repository, establishing a continuous deployment pipeline connected to **Vercel**. The site is now distributed across a global edge network, delivering immediate TTFB (Time to First Byte).

---

## 🤝 Project Credits

* **🎨 WordPress Design & Development:** [Saad Bin Haroon](https://linktr.ee/coollsaaad) 
* **🏗️ Migration & Edge Architecture:** Afaq Bin Aamir ([@pvrplxd](https://github.com/pvrplxd))

*This project serves as a technical proof-of-concept for migrating legacy CMS platforms to modern JAMstack infrastructures.*
