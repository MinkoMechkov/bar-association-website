# Bar Association Website

This is a web application for a bar association, built with Next.js and TypeScript.

## Features

- View information about the bar association.
- Search for and view profiles of lawyers.
- News and updates from the association.
- User authentication and profiles.
- Admin, portal, and public sections.
- Internationalization support.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** Likely using [shadcn/ui](https://ui.shadcn.com/) principles with Radix UI and Tailwind CSS.
- **Data Fetching:** [Tanstack Query](https://tanstack.com/query/latest) & [Axios](https://axios-http.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

## Project Structure

The project follows a standard Next.js `src/app` directory structure.

```
/src
├── app/                  # Main application routes
│   ├── (admin)/          # Admin-only routes
│   ├── (auth)/           # Authentication routes (e.g., login)
│   ├── (portal)/         # Member portal routes
│   ├── (public)/         # Publicly accessible routes
│   ├── [lang]/           # Internationalization (i18n) routes
│   └── api/              # API routes
├── components/           # Reusable React components
├── contexts/             # React contexts (e.g., LanguageContext)
├── data/                 # Mock or static data
├── hooks/                # Custom React hooks
├── lib/                  # Library/utility functions
├── services/             # API service definitions
├── styles/               # Global styles
└── types/                # TypeScript type definitions
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v20 or later recommended)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd bar-association-website
    ```

2.  Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

## Development

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To build the application for production:

```bash
npm run build
```

This will create an optimized production build in the `.next` folder.

To run the production server:

```bash
npm run start
```

## Linting

To check for code quality and style issues:

```bash
npm run lint
```
