# zulfatravel - Aslam Travel

Welcome to **Aslam Travel**, a modern web application designed for Umrah and Haji travel services. This Next.js application provides a comprehensive platform for users to explore travel packages, book pilgrimages, and access information about Umrah and Haji services.

## Features

- 🌐 **Modern Web Application**: Built with Next.js 15.5.4 and React 19.1.0
- 🎨 **Responsive Design**: Fully responsive layout with mobile and desktop support
- 🎯 **Accessibility**: Designed with modern accessibility standards
- 🌈 **Styling**: Tailwind CSS with custom font integration (Inter and Teko)
- 📱 **Component Architecture**: Clean component organization with theme-based structure
- 🔄 **Optimized Performance**: Font optimization and best practices for fast loading

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) 15.5.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: React Icons
- **Fonts**: Google Fonts (Inter and Teko)

## Project Structure

```
zulfatravel/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles with theme support
├── components/
│   ├── theme/
│   │   ├── 01-Navbar/      # Navigation components
│   │   └── 02-HeroSection/ # Hero section components
│   └── elements/           # Reusable UI elements
├── public/                 # Static assets
└── ...
```

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server

## About Aslam Travel

Aslam Travel is a dedicated platform for Umrah and Haji travel services, providing comprehensive information, packages, and booking facilities for pilgrimage journeys. The website aims to make the process of planning and booking religious travel easier and more accessible.

## Learn More

To learn more about the technologies used in this project, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Tailwind CSS](https://tailwindcss.com/docs) - rapid UI development with utility-first CSS.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
