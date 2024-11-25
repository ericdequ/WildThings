# Warriors and Wild Things Yoga

A Next.js website for Warriors and Wild Things Yoga, an Atlanta-based yoga studio owned by Holly deQuevedo.

## Overview

This website serves as the online presence for Warriors and Wild Things Yoga, showcasing class schedules, instructor profiles, and allowing students to book sessions.

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Vercel CLI (optional for local development)

### Getting Started

1. Clone the repository:

```bash
git clone [repository-url]
cd warriors-and-wild-things
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### Environment Variables

Create a `.env.local` file in the root directory and add the necessary environment variables:

```
NEXT_PUBLIC_API_URL=
# Add other required environment variables
```

## Deployment

This project is deployed on Vercel. The production site can be accessed at:

- Production: [warriorsandwildthings.com](https://warriorsandwildthings.com)
- Development: [wild-things.vercel.app](https://wild-things.vercel.app)

### Deployment Process

The site automatically deploys to Vercel when changes are pushed to the main branch.

To manually deploy:

```bash
vercel
```

For production deployment:

```bash
vercel --prod
```

## Project Structure

```
warriors-and-wild-things/
├── components/        # Reusable React components
├── pages/            # Next.js pages and API routes
├── public/           # Static assets
├── styles/           # CSS and styling files
└── utils/            # Helper functions and utilities
```

## Tech Stack

- Next.js
- React
- Vercel (Hosting)
- [Add other major dependencies]

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

[Add appropriate license]

## Contact

For any questions or issues, please contact:

- Holly deQuevedo (Owner)
- Alex deQuevedo (CTO) Warriors & Wild things
- Eric deQuevedo (Tech Support / front end)
