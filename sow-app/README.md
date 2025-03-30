# SOW Estimator

A professional services scope of work estimation tool that helps create accurate estimates for consulting, training, and data migrations.

## Features

- Modern Next.js 14 application with TypeScript
- Beautiful UI using shadcn/ui components
- Docker-based development environment
- Hot-reloading for rapid development
- Dark mode support
- Responsive design

## Prerequisites

- Node.js 20 (LTS) or Docker Desktop
- npm or yarn
- Git

## Getting Started

### Using Docker (Recommended)

1. Install Docker Desktop from [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)
2. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sow-app
   ```
3. Start the development server:
   ```bash
   docker compose up --build
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sow-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
sow-app/
├── src/
│   ├── app/                 # Next.js app router pages
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── forms/          # Form components
│   │   └── layout/         # Layout components
│   └── lib/                # Utility functions and types
│       ├── types/          # TypeScript interfaces
│       ├── utils/          # Helper functions
│       └── api/            # API routes
├── public/                 # Static assets
└── docker/                # Docker configuration
```

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `docker compose up --build` - Start with Docker
- `docker compose down` - Stop Docker containers

## Docker Commands

- Build and start: `docker compose up --build`
- Start in background: `docker compose up -d`
- Stop containers: `docker compose down`
- View logs: `docker compose logs -f`
- Rebuild: `docker compose up --build --force-recreate`

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

MIT
