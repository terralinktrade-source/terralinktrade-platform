# Terra Link Trade — Platform Scaffold

This repository contains a minimal scaffold for the Terra Link Trade B2B platform.

Stack (free-first defaults):
- Next.js (App Router) + TypeScript
- Prisma + PostgreSQL (Render managed Postgres)
- NextAuth.js (email + OAuth)
- SendGrid for transactional email (free tier)
- Google Analytics 4 (free)
- Sentry (free tier) for error monitoring
- UptimeRobot for uptime checks

Repository layout

- app/ — Next.js App Router pages and API routes
- prisma/ — Prisma schema and seed script
- .github/workflows — CI and optional deploy workflows
- render.yaml — Render service + DB template
- Dockerfile — production Dockerfile
- docs/ — deploy and secrets documentation

Quickstart — local development

1. Clone the repo and checkout the scaffold branch

   git clone git@github.com:terralinktrade-source/terralinktrade-platform.git
   cd terralinktrade-platform
   git checkout scaffold/render-setup

2. Copy environment file

   cp .env.example .env

   Fill in the values in .env (see docs/secrets.md). For local development you can use a local Postgres instance or a Render Postgres connection string.

3. Install dependencies

   npm ci

4. Generate Prisma client and run migrations

   npx prisma generate
   npx prisma migrate dev --name init
   npm run prisma:seed

5. Run the dev server

   npm run dev

6. Open http://localhost:3000

Authentication

- This scaffold uses NextAuth.js with an Email provider by default and placeholders for OAuth providers.
- Configure the environment variables documented in docs/secrets.md (NEXTAUTH_URL, NEXTAUTH_SECRET, EMAIL_SERVER_*, EMAIL_FROM).

Production deployment (Render)

1. Connect this GitHub repository to Render
   - Create a new Web Service -> connect GitHub -> select terralinktrade-platform
   - Choose Docker as the environment and point to the repository root Dockerfile
   - Branch: scaffold/render-setup (or main once merged)

2. Create a Managed Postgres instance on Render
   - Console -> New -> PostgreSQL -> choose Starter plan (free)
   - Note the DATABASE_URL value and add it to the Web Service environment variables on Render

3. Add required environment variables to the Render Web Service (Environment -> Environment Variables)
   - NEXTAUTH_URL = https://www.terralinktrade.com
   - NEXTAUTH_SECRET = <generate-a-secure-random-string>
   - DATABASE_URL = <from managed Postgres>
   - SENDGRID_API_KEY = <from SendGrid>
   - EMAIL_FROM = no-reply@terralinktrade.com
   - SENTRY_DSN = <from Sentry (optional)>
   - NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX (optional)

4. Deploy
   - Trigger a deploy from the Render console or push to the scaffold branch to start a build

5. DNS
   - Once the service is live, add the CNAME/ALIAS that Render gives you for www.terralinktrade.com in your DNS provider.

CI/CD

- .github/workflows/ci.yml runs lint and build on pushes to scaffold/render-setup and main.
- .github/workflows/deploy-to-render.yml contains a job to trigger Render deploys using your RENDER_API_KEY and RENDER_SERVICE_ID stored in GitHub Secrets.

Docs & runbook

- docs/deploy.md — detailed Render setup
- docs/secrets.md — list of required secrets and environment variables
- docs/monitoring.md — how to configure Sentry, GA4, and UptimeRobot

Support

If you get stuck at any step (DB migrations, Render deployment, DNS), open an issue in this repo with the failure logs and I’ll help troubleshoot.
