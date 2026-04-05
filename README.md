# Finance Dashboard UI

A modern, responsive finance dashboard built with React, Vite, Tailwind CSS, and Recharts. This project demonstrates clean UI design, component structure, state management, and mock data handling for a typical fintech SaaS dashboard.

## Features

- Sidebar navigation with active highlighting
- Dashboard overview with summary cards
- Interactive balance trend (line chart) and spending breakdown (pie chart)
- Transactions table with search and filter
- Insights panel with progress bars
- Analytics, Budget, and Settings pages with realistic UI
- Responsive design and dark mode ready
- Clean, modular code structure

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Recharts
- (Optional) Framer Motion, Lucide React (for icons/animation)

## Getting Started

### 1. Clone the repository

```
git clone https://github.com/Tejaswini-co/finance-dashboard-ui.git
cd finance-dashboard-ui
```

### 2. Install dependencies

```
npm install
```

### 3. Run the development server

```
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the dashboard.

### 4. Build for production

```
npm run build
```

The optimized build will be in the `dist` folder.

## Deployment (Vercel)

1. **Push your code to GitHub** (already done).
2. **Go to [vercel.com](https://vercel.com/)** and sign in with your GitHub account.
3. **Click "New Project"** and import your `finance-dashboard-ui` repository.
4. **Configure the project:**
   - Framework: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - (Other settings can be left as default)
5. **Click "Deploy"**.
6. After deployment, Vercel will provide a live URL for your dashboard.

## Folder Structure

```
finance-dashboard-ui/
├── src/
│   ├── components/
│   ├── data/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── tailwind.config.js
├── postcss.config.cjs
├── package.json
└── README.md
```

## Customization
- Update mock data in `src/data/mockData.js`.
- Add or modify components in `src/components/`.
- Adjust Tailwind config for custom themes or breakpoints.

## License

This project is for educational and demonstration purposes.
