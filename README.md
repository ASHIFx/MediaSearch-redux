# Search Photo

Search Photo is a modern React application for discovering and saving media content such as photos, videos, and GIFs. The project combines Redux Toolkit for predictable state management, React Router for navigation, and Tailwind CSS for a clean, responsive UI.

## Overview

This application allows users to:
- Search for media using multiple public APIs
- Switch between photo, video, and GIF results
- Save favorite items to a personal collection
- Remove or clear saved items when needed
- Keep their collection persisted in the browser with local storage

The interface is designed to feel simple and polished while keeping the underlying architecture easy to understand and extend.

## Key Features

- Responsive media search experience
- Tab-based filtering for photos, videos, and GIFs
- Redux-powered state management for search and collection flows
- Persistent collection storage with localStorage
- Toast notifications for save and remove actions
- Clean, card-based layout for browsing results

## Tech Stack

- React 19
- Redux Toolkit
- React Router DOM
- Axios
- Tailwind CSS
- React Toastify
- Vite
- ESLint

## Project Structure

```text
src/
├── api/
│   └── mediaApi.js
├── component/
│   ├── CollectionCard.jsx
│   ├── Navbar.jsx
│   ├── ResultCard.jsx
│   ├── ResultGrid.jsx
│   ├── SearchBar.jsx
│   └── Tabs.jsx
├── pages/
│   ├── Collection.jsx
│   └── Homepage.jsx
├── redux/
│   ├── features/
│   │   ├── CollectionSlice.js
│   │   └── SearchSlice.js
│   └── store.js
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a local environment file named `.env.local` in the project root and add your API keys:

```env
VITE_UNSPLASH_KEY=your_unsplash_api_key
VITE_PEXELS_KEY=your_pexels_api_key
VITE_GIPHY_KEY=your_giphy_api_key
```

4. Start the development server:

```bash
npm run dev
```

## Available Scripts

- `npm run dev` — start the development server
- `npm run build` — build the app for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint checks

## Application Flow

1. The user enters a search query.
2. The search slice stores the query and active tab.
3. The API layer fetches data from Unsplash, Pexels, or Giphy.
4. Results are displayed in a responsive card grid.
5. Users can save media to the collection, which is managed through Redux and persisted in localStorage.

## State Management

The app uses two main Redux slices:

- `search` — manages search input, active tab, results, loading state, and errors
- `collection` — manages saved items and toast-based feedback

## Notes

- API keys are required for search functionality.
- The collection persists across browser refreshes using localStorage.
- Toast messages provide instant feedback when an item is added or removed.

## License

This project is open for educational and personal use.

