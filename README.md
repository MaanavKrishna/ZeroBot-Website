# ZeroBot Website

This is the official website for ZeroBot, an automated intraday trading bot for Zerodha, powered by the KiteConnect API.

## Features

- Modern UI with dark theme and glass-morphism design
- Responsive design for all device sizes
- Animated components with Framer Motion
- Interactive charts with Recharts
- SEO optimized with metadata, OpenGraph, and JSON-LD

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Recharts
- React Icons

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/MaanavKrishna/ZeroBot.git
cd ZeroBot/website
```

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Vercel (Recommended)

The easiest way to deploy this website is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a Git repository (GitHub, GitLab, BitBucket)
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

### Other Hosting Options

To build the project for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This will create a `.next` folder with the production build.

Start the production server:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## Project Structure

- `src/app/`: Next.js app directory with pages and layouts
- `src/components/`: React components used across the site
- `src/app/globals.css`: Global CSS styles
- `public/`: Static assets and files

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Links

- [ZeroBot GitHub Repository](https://github.com/MaanavKrishna/ZeroBot)
- [Zerodha](https://zerodha.com/)
- [KiteConnect API](https://kite.trade/)
