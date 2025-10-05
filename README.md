

# Next.js Boilerplate

![Next.js](https://img.shields.io/badge/Next.js-14%2B-000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18%2B-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwindcss&logoColor=white)

Personal Next.js boilerplate for rapid project setup and best practices.

## Features

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS (PostCSS ready)
- Pre-configured ESLint & Prettier
- Customizable folder structure
- Example components, hooks, and utilities

## Getting Started

1. **Install dependencies:**
	```bash
	npm install
	# or
	yarn
	# or
	pnpm install
	```

2. **Run the development server:**
	```bash
	npm run dev
	# or
	yarn dev
	# or
	pnpm dev
	```

3. Open [http://localhost:3000](http://localhost:3000) to view your app.

## Usage

- Edit `src/app/page.tsx` to start building your homepage.
- Add components in `src/components/`.
- Update global styles in `src/styles/globals.css`.
- Store constants, hooks, types, and utilities in their respective folders under `src/`.

## Customization

- Update `next.config.ts` and `tsconfig.json` as needed.
- Add environment types in `src/types/env.d.ts`.
- Replace or extend the example components and utilities.

## Deployment

Deploy easily to [Vercel](https://vercel.com/) or your preferred platform.

## Project Structure

```
nextjs-boilerplate/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   ├── constants/
│   ├── hooks/
│   ├── styles/
│   │   └── globals.css
│   ├── types/
│   └── utils/
├── public/
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Main Dependencies

- **Next.js**: React framework for server-side rendering, static site generation, and more
- **React**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint & Prettier**: Code linting and formatting
- **TypeScript**: Strongly typed programming language

## License

This project is licensed under the terms found in the [LICENSE](./LICENSE) file.

## Author

Created by [Son H.Do](https://github.com/cmhkuot)
