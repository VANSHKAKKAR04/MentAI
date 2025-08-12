# MentAI – AI-Powered Career Counselling Platform

MentAI is a full-stack **AI-powered career counseling tool** built with **Next.js**, **Shadcn UI**, **Inngest**, **Gemini AI**, and a robust backend.  
It provides **personalized industry insights, mock interview preparation, AI-generated resumes & cover letters**, and much more to help users grow in their careers.

---

## 📽 Features Overview

### 1. User Experience
- **Landing Page** – Clean and modern UI to introduce the platform.  
- **User Authentication** – Secure login/signup using modern authentication flows.  
- **Onboarding Form** – Collects career goals, interests, and skills to tailor AI insights.

### 2. AI-Powered Career Tools
- **Industry Insights** – Weekly AI-curated career tips & updates via **Inngest Cron Jobs**.  
- **Mock Interviews** – AI-generated interview questions with performance tracking & results.  
- **AI Resume Builder** – Create ATS-friendly resumes in Markdown and export as PDF.  
- **AI Cover Letter Generator** – Personalized and professional cover letter creation.

### 3. Backend & Automation
- **Gemini AI Integration** – Powers AI insights, interview questions, and career recommendations.  
- **Inngest Functions** – Scheduled weekly career insights sent to users.  
- **Custom API Endpoints** – For onboarding, AI queries, and user data handling.

---

## 🛠️ Tech Stack

### Frontend
- [Next.js](https://nextjs.org/) – React-based framework for fast, server-side rendering.  
- [Shadcn UI](https://ui.shadcn.com/) – Modern, accessible UI components.  
- Tailwind CSS – Utility-first CSS framework.

### Backend
- Node.js with Next.js API Routes for server-side logic.  
- Inngest for serverless event-driven functions & cron jobs.  
- PostgreSQL (via Prisma ORM) for storing user data, onboarding responses, and resume details.

### AI Integrations
- Gemini AI API – Generates insights, interview questions, resumes, and cover letters.

---

## 📂 Project Structure
```plaintext
mentai/
│
├── app/               # Next.js app directory
│   ├── (components)   # Reusable UI components
│   ├── (auth)         # Login, Signup, Auth UI
│   ├── (pages)        # App routes & views
│
├── lib/               # Utility functions & API helpers
├── prisma/            # Database schema & migrations
├── inngest/           # Inngest event functions & cron jobs
├── public/            # Static assets
└── README.md
