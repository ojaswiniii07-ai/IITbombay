# ⚡ Tech Event Management Portal

A modern, responsive, and feature-rich frontend web application designed for college students to discover technical events, explore agendas, filter by categories, and register with real-time validation and digital ticket pass generation.

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Design_System-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![LocalStorage](https://img.shields.io/badge/LocalStorage-API-10B981?style=for-the-badge&logo=html5&logoColor=white)

---

## 📌 Table of Contents
- [Project Overview](#-project-overview)
- [Problem Statement & Objectives](#-problem-statement--objectives)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Featured Events](#-featured-events)
- [Project Folder Structure](#-project-folder-structure)
- [Installation & Getting Started](#-installation--getting-started)
- [Evaluation & Marks Alignment](#-evaluation--marks-alignment)
- [Future Scope](#-future-scope)

---

## 🚀 Project Overview

The **Tech Event Management Portal** is a centralized platform tailored for college students, technical clubs, and event organizers. It eliminates the hassle of fragmented event announcements by providing an interactive catalog of hackathons, competitive coding challenges, AI workshops, cybersecurity CTFs, and robotics competitions.

Students can seamlessly browse events, filter by domain, search in real-time, view detailed schedules and speakers, register through a validated form, and download/print an official **Digital Entry Pass**.

---

## 🎯 Problem Statement & Objectives

### Problem Statement
Students often struggle to discover technical events across campus departments, understand detailed schedules/prerequisites, and register efficiently. Existing methods rely on scattered social media posts or static posters without registration confirmation.

### Objectives
1. **Centralized Discovery**: Create an attractive, intuitive portal for discovering multiple technical events.
2. **Dynamic Filtering**: Enable instant text search and domain-specific category filtering (Coding, AI, Robotics, etc.).
3. **Validated Registration**: Provide a robust form with real-time validation to prevent invalid entries.
4. **Digital Pass Output**: Instantly generate an official ticket pass with unique Pass ID and barcode visual upon successful registration.
5. **Responsive & Accessible**: Guarantee perfect usability across Mobile (320px+), Tablet, and Desktop screens.
6. **Persistence & Customization**: Support Dark/Light theme switching, bookmarked events, and ticket history saved locally via the Browser LocalStorage API.

---

## ✨ Key Features

### 1. 🌟 Hero Section & Live Countdown Ticker
- Prominent headline, platform statistics, and direct Call-To-Action (CTA) buttons.
- Real-time live countdown ticker counting down to the flagship hackathon (*HackNova 48H*).

### 2. 🔍 Dynamic Search & Category Filter System
- **Real-Time Search**: Search events instantaneously by title, category, or description keywords.
- **Category Filter Chips**: Filter by *All*, *Coding*, *Hackathon*, *Artificial Intelligence*, *Cybersecurity*, *Web Development*, *Robotics*, and *Data Science*.
- **Empty State Fallback**: Friendly message with a one-click reset filter button when no results match.

### 3. ✍️ Validated Registration Form
- **Fields**: Full Name, Email Address, College/Institute Name, Event Selector, Year of Study, and T-Shirt Swag Size.
- **Real-Time Validation Rules**:
  - Full Name: Non-empty, minimum 2 characters.
  - Email Address: RFC 5322 regex pattern check.
  - College Name: Non-empty.
  - Event Selection: Required selected event.
- **Auto-Fill & Smooth Scroll**: Clicking "Register Now" on any event card automatically scrolls to the form and pre-selects the corresponding event.

### 4. 🎟️ Digital Ticket Pass & Registration Drawer
- **Pass Generation**: Instant popup modal displaying an official entry pass with Pass ID, barcode graphic, attendee breakdown, and event details.
- **Print & Save**: One-click option to print or save the entry pass as a PDF.
- **My Passes Drawer**: View and manage all past registrations saved in `localStorage`.

### 5. 🌙 Dark / Light Mode Toggle
- Seamless theme switching with custom CSS design tokens (`:root` variables) and persistent state across page reloads.

### 6. ❤️ Event Bookmarking / Saved Drawer
- Toggle favorite events with heart buttons, persistent storage, and quick filter tab for bookmarked items.

---

## 🛠️ Technology Stack

| Technology | Purpose | Requirement Level |
| :--- | :--- | :--- |
| **HTML5** | Semantic structure and layout hierarchy | Mandatory |
| **CSS3** | Custom design system, CSS variables, glassmorphism, responsive grid, animations | Mandatory |
| **JavaScript (ES6+)** | Dynamic rendering, state management, search/filter algorithms | Mandatory |
| **React 18 & Vite** | Component architecture, state hooks, and high-performance HMR bundling | Mandatory / Enhanced |
| **LocalStorage API** | Persisting user theme, bookmarks, and registration passes | Bonus Feature |

---

## 📅 Featured Events

The portal pre-loads 7 comprehensive technical events:

1. 💻 **CodeSprint 2026** *(Coding)* — Fast-paced competitive programming contest solving algorithmic puzzles.
2. 🚀 **HackNova 48H** *(Hackathon)* — 48-hour flagship hackathon building AI & Web3 products with ₹1,50,000 prize pool.
3. 🤖 **AI Innovators Summit** *(Artificial Intelligence)* — Deep dive into LLMs, Generative Agents, and RAG architectures.
4. 🛡️ **CyberShield 360** *(Cybersecurity)* — Capture The Flag (CTF) tournament and ethical hacking workshop.
5. 🌐 **WebForge Masterclass** *(Web Development)* — Modern frontend stacks with React, Vite, and serverless architectures.
6. 🦾 **RoboRush Arena** *(Robotics)* — Autonomous line-follower and obstacle avoidance bot competition.
7. 📊 **DataPulse Analytics** *(Data Science)* — Big Data processing, Pandas pipelines, and predictive ML modeling.

---

## 📁 Project Folder Structure

```
IITbombay/
├── .gitignore
├── README.md
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── public/
    └── src/
        ├── App.jsx             # Main Hub (State, Modals, Theme, Filters)
        ├── main.jsx            # React Entry Point
        ├── index.css           # Global Design System (Variables, Dark/Light Mode, Glassmorphism)
        ├── data/
        │   └── eventsData.js   # Technical Events Dataset & Categories
        └── components/
            ├── Navbar.jsx           # Sticky Header with Theme Toggle & Ticket Badge
            ├── Hero.jsx             # Headline, CTAs, Live Countdown Ticker
            ├── EventFilter.jsx      # Search Bar & Category Chips
            ├── EventCard.jsx        # Event Card with Seat Capacity & Bookmarking
            ├── EventModal.jsx       # Detailed Event Agenda & Speaker Modal
            ├── RegistrationForm.jsx # Validated Registration Form
            ├── TicketModal.jsx      # Digital Pass & Barcode Output Modal
            └── Footer.jsx           # Footer Links & Categories
```

---

## ⚡ Installation & Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0 or higher)
- `npm` or `yarn`

### Steps to Run Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ojaswiniii07-ai/IITbombay.git
   cd IITbombay/frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/`.

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 📊 Evaluation & Marks Alignment

| Requirement | PRD Implementation | Status |
| :--- | :--- | :---: |
| **Home Page** | Hero section + highlights + countdown ticker + CTAs | ✅ Completed |
| **Event Listing** | Minimum 6+ detailed event cards (7 provided) | ✅ Completed |
| **Search System** | Instant search by event name, category, or description | ✅ Completed |
| **Category Filter** | Multi-category filter chips with active states & reset | ✅ Completed |
| **Registration Form** | Validated form (Name, Email, College, Event Selection) | ✅ Completed |
| **Responsive Design** | Full support for Mobile (320px+), Tablet, Desktop | ✅ Completed |
| **Dark Mode** | Theme toggle switch with `localStorage` memory | ✅ Completed (Bonus) |
| **LocalStorage** | Stores theme, bookmarks, and registration ticket passes | ✅ Completed (Bonus) |
| **Animated UI** | Smooth hover elevation, glassmorphism, ticket modals | ✅ Completed (Bonus) |
| **Custom Feature** | Digital Entry Pass with barcode graphic & print view | ✅ Completed (Bonus) |

---

## 🔮 Future Scope

- **Backend Integration**: REST/GraphQL API integration with Node.js/Express & PostgreSQL/MongoDB for persistent server storage.
- **Student Authentication**: JWT-based login for student profiles and registration history.
- **Organizer Dashboard**: Admin panel to add, edit, or remove technical events.
- **Automated Email Confirmation**: Instant email dispatch containing entry QR codes upon registration.
