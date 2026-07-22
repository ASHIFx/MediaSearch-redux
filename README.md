# Search Photo

Search Photo is a React-based media discovery app that lets users search for photos, videos, and GIFs, then save their favorites into a personal collection. It is built with React, Redux Toolkit, React Router, Tailwind CSS, and Vite.

## What this project does

This app provides a simple and modern experience for:
- searching media from multiple public APIs
- viewing results in a responsive grid
- switching between photo, video, and GIF categories
- saving items to a collection for later use
- removing or clearing saved items instantly

## Main features

- Fast and responsive media search UI
- Category tabs for photos, videos, and GIFs
- Persistent collection using browser local storage
- Redux-powered state management
- Toast notifications for save and remove actions
- Clean card-based interface for browsing results

## Tech stack

- React
- Redux Toolkit
- React Router DOM
- Axios
- Tailwind CSS
- React Toastify
- Vite
- ESLint

## Project structure

```text
src/
├── api/
│   └── mediaApi.js
├── components/
│   ├── CollectionCard.jsx
│   ├── Error.jsx
│   ├── Loading.jsx
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

## Setup instructions

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the project root and add your API keys:

```env
VITE_UNSPLASH_KEY=your_unsplash_api_key
VITE_PEXELS_KEY=your_pexels_api_key
VITE_GIPHY_KEY=your_giphy_api_key
```

4. Start the app locally:

```bash
npm run dev
```

## Available scripts

- `npm run dev` — start the development server
- `npm run build` — build the project for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint checks

## How the app works

1. The user enters a search term.
2. The search state is updated through Redux.
3. The API layer requests data from Unsplash, Pexels, or Giphy.
4. Results are displayed in a responsive list of cards.
5. Users can save selected items into the collection, which is persisted in local storage.

## State management

The app uses two Redux slices:
- `search` for query, tab selection, results, loading, and errors
- `collection` for saved items and feedback toasts

## Notes

- API keys are required for media search to work.
- Saved items remain available after page refreshes because they are stored in local storage.
- Toast notifications provide quick feedback when items are added or removed.

## License

This project is intended for learning and personal development purposes.

