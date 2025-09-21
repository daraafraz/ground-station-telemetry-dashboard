
# Racing Dashboard

A modern, responsive racing dashboard interface built with Next.js, React, and Tailwind CSS. This dashboard displays real-time racing data including local maps, vehicle metrics, and safety monitoring systems.

## Features

- **Interactive Local Map** - Animated racing environment with moving cars and road boundaries
- **Full-Track Map** - Complete racing track visualization with racing line
- **Real-time Data Charts** - Control heading errors, GPS data, and steering information
- **Vehicle Metrics** - Speed, RPM, gear, engine temperature monitoring
- **Safety Monitor** - Comprehensive safety system status and alerts
- **Modern UI** - Dark theme with glass-morphism effects and responsive design

## Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd racing-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

The project includes:
- `vercel.json` configuration
- Optimized Next.js build settings
- Proper asset handling for production

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── src/
│   ├── components/        # React components
│   │   └── RacingDashboard.tsx
│   ├── imports/          # SVG and data imports
│   └── lib/              # Utilities
├── public/               # Static assets
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json
```

## Original Design

Based on the original Figma design: [Create UI Design](https://www.figma.com/design/8MfU6qUrjReez01Uj6gHin/Create-UI-Design)

## License

MIT License
  