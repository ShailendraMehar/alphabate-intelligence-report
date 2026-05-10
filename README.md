# Alphabet 2025 Report

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=)

A modern full-stack application built with Cloudflare Workers, Durable Objects, React, and Tailwind CSS. This project demonstrates a scalable chat application with user management and real-time messaging capabilities using Cloudflare's edge computing platform.

## Features

- **Full-Stack Architecture**: React frontend with Vite, Hono backend on Cloudflare Workers.
- **Durable Objects**: Persistent storage for users and chat boards with indexing for efficient listing.
- **Modern UI**: shadcn/ui components, Tailwind CSS with custom theming, dark/light mode support.
- **State Management**: Tanstack Query for data fetching, React Router for navigation.
- **Responsive Design**: Mobile-first layout with sidebar navigation.
- **Type-Safe**: Full TypeScript support across frontend and backend.
- **Real-time Ready**: Foundation for WebSockets or polling-based updates.
- **Production-Ready**: Error boundaries, logging, CORS, and health checks.

## Tech Stack

- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui, Lucide React icons, Tanstack Query, React Router, Sonner (toasts).
- **Backend**: Hono, Cloudflare Workers, Durable Objects (SQLite-backed).
- **Utilities**: clsx, tailwind-merge, Zod (validation ready), Immer, Framer Motion.
- **Dev Tools**: Bun, ESLint, Wrangler.

## Quick Start

1. **Prerequisites**:
   - [Bun](https://bun.sh/) installed.
   - [Cloudflare Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install/) installed (`npm i -g wrangler`).

2. **Clone & Install**:
   ```bash
   git clone <repository-url>
   cd alphabet-2025-report-l2m7uq9gu8lah6z588ebx
   bun install
   ```

3. **Development**:
   ```bash
   bun dev
   ```
   Opens at `http://localhost:3000` (or `$PORT`).

4. **Type Generation** (for Workers env):
   ```bash
   bun cf-typegen
   ```

## Development

- **Frontend**: Edit `src/` files. Hot-reload with `bun dev`.
- **Backend Routes**: Add API endpoints in `worker/user-routes.ts`. Uses entities in `worker/entities.ts`.
- **Entities**: Extend `IndexedEntity` in `worker/entities.ts` for new data models (auto-indexing).
- **UI Components**: Use shadcn/ui from `@/components/ui/`. Add via `npx shadcn-ui@latest add <component>`.
- **Seeds**: Mock data auto-seeds on first API call via `ensureSeed()`.
- **Linting**: `bun lint`.
- **Build**: `bun build` (produces `dist/` for preview).

### API Examples

Fetch users:
```
GET /api/users?limit=10
```

Create chat:
```
POST /api/chats { "title": "My Chat" }
```

Send message:
```
POST /api/chats/:chatId/messages { "userId": "u1", "text": "Hello" }
```

Full OpenAPI docs available at `/api/docs` in dev.

## Deployment

1. **Login to Cloudflare**:
   ```bash
   wrangler login
   ```

2. **Deploy**:
   ```bash
   bun deploy
   ```
   Deploys Workers + static assets (SPA fallback).

3. **One-Click Deploy**:
   [![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/ShailendraMehar/alphabate-intelligence-report)

### Production Notes

- **Bindings**: Auto-configured Durable Objects (`GlobalDurableObject`).
- **Assets**: Static files served from Workers with SPA routing.
- **Observability**: Enabled via `wrangler.jsonc`.
- **Custom Domain**: `wrangler deploy --name my-app`.
- **Migrations**: SQLite DOs migrate automatically.

## Project Structure

```
├── src/                 # React frontend
├── worker/              # Cloudflare Workers backend
├── shared/              # Shared types
├── tailwind.config.js   # UI theming
└── wrangler.jsonc      # Workers config
```

## Customization

- **Remove Demo**: Replace `src/pages/HomePage.tsx`.
- **New Entities**: Extend `worker/entities.ts` → Add routes in `user-routes.ts`.
- **Theme**: Edit `src/index.css` and `tailwind.config.js`.

## Contributing

1. Fork & PR.
2. Follow TypeScript/Prettier/ESLint.
3. Test changes: `bun dev` + API calls.

## License

MIT. See [LICENSE](LICENSE) for details.

---

Built with ❤️ for Cloudflare Workers. Questions? Open an issue!