# Search Photo - Media Discovery Platform

A modern, responsive web application for discovering and managing photos, videos, and GIFs from multiple sources. Built with React, Redux Toolkit, and Tailwind CSS.

## 🌟 Features

- **Multi-Source Search**: Search and browse content from three major APIs:
  - 📸 **Unsplash** - High-quality photos
  - 🎬 **Pexels** - Professional videos
  - 🎞️ **Giphy** - Animated GIFs

- **Smart Collection Management**: 
  - Save favorite media to your personal collection
  - Persistent storage using browser localStorage
  - One-click removal from collection
  - Clear entire collection with a single button

- **State Management**: Redux Toolkit for robust, scalable state management

- **User-Friendly UI**: Clean, modern interface with:
  - Real-time search
  - Tabbed interface for easy filtering
  - Toast notifications for user feedback
  - Responsive grid layout

## 🚀 Tech Stack

### Frontend
- **React** 19.2.0 - UI library
- **Redux Toolkit** 2.12.0 - State management
- **React Router** 7.18.1 - Client-side routing
- **Axios** 1.18.1 - HTTP client for API calls
- **Tailwind CSS** 4.3.3 - Utility-first CSS framework
- **React Toastify** 11.1.0 - Toast notifications

### Build & Development
- **Vite** 7.3.1 - Next-generation build tool
- **ESLint** 9.39.1 - Code quality tool

## 📋 Project Structure

```
src/
├── api/
│   └── mediaApi.js           # API service for Unsplash, Pexels, Giphy
├── component/
│   ├── CollectionCard.jsx    # Card component for collection items
│   ├── Navbar.jsx            # Navigation bar with links
│   ├── ResultCard.jsx        # Card component for search results
│   ├── ResultGrid.jsx        # Grid layout for displaying results
│   ├── SearchBar.jsx         # Search input component
│   └── Tabs.jsx              # Tab switcher (Photos, Videos, GIFs)
├── pages/
│   ├── Collection.jsx        # Collection page - view saved items
│   └── Homepage.jsx          # Home page - search interface
├── redux/
│   ├── store.js              # Redux store configuration
│   └── features/
│       ├── CollectionSlice.js # Collection reducer & actions
│       └── SearchSlice.js     # Search state management
├── App.jsx                   # Main app component
├── main.jsx                  # Entry point
└── index.css                 # Global styles
```

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd search-photo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   VITE_UNSPLASH_KEY=your_unsplash_api_key
   VITE_PEXELS_KEY=your_pexels_api_key
   VITE_GIPHY_KEY=your_giphy_api_key
   ```

   **Get API Keys:**
   - [Unsplash API](https://unsplash.com/oauth/applications) - Free
   - [Pexels API](https://www.pexels.com/api/) - Free
   - [Giphy API](https://developers.giphy.com/) - Free

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

## 📦 Build & Deployment

**Build for production:**
```bash
npm run build
```

**Preview production build locally:**
```bash
npm run preview
```

**Run linting:**
```bash
npm run lint
```

## 🎯 Usage

### Search for Media
1. Enter search keywords in the search bar
2. Use the tabs to filter by type (Photos, Videos, or GIFs)
3. Browse results in the responsive grid

### Manage Collection
1. Click the **"Save"** button on any media card to add to your collection
2. Navigate to the **Collection** page to view saved items
3. Click **"Remove"** to delete items from collection
4. Click **"Clear Collection"** to remove all saved items

### Persistent Storage
- All saved items are automatically stored in browser localStorage
- Your collection persists across browser sessions

## 🏗️ Redux Architecture

### Store Structure
```javascript
{
  search: {
    items: [],
    loading: false,
    error: null
  },
  collection: {
    items: [] // persisted to localStorage
  }
}
```

### Available Actions

**Search Slice:**
- Search photos, videos, GIFs
- Manage loading and error states

**Collection Slice:**
- `addCollection` - Add item to collection
- `removeCollection` - Remove item by ID
- `clearCollection` - Clear all items
- Toast notifications for user feedback

## 🎨 Styling

The project uses **Tailwind CSS** for all styling. Custom colors and utilities can be configured in the Tailwind configuration.

Key style classes used:
- Responsive grid layouts
- Gradient overlays for image cards
- Utility classes for spacing and typography
- Dark mode support ready

## 🔄 State Management Flow

```
Component → Dispatch Action → Reducer → Update State → Component Re-render → localStorage Sync
```

## 🚨 Error Handling

- API errors are caught and logged
- User-friendly error messages via toasts
- Graceful fallback UI for empty states

## 🔒 Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_UNSPLASH_KEY` | Unsplash API authentication key |
| `VITE_PEXELS_KEY` | Pexels API authentication key |
| `VITE_GIPHY_KEY` | Giphy API authentication key |

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🐛 Troubleshooting

**LocalStorage not persisting?**
- Check browser's localStorage is enabled
- Verify Redux actions are being dispatched
- Check browser console for errors

**API calls failing?**
- Verify API keys are correct in `.env.local`
- Check API rate limits haven't been exceeded
- Ensure CORS headers are properly configured

**Styling issues?**
- Clear browser cache and rebuild: `npm run build`
- Ensure Tailwind CSS is properly installed
- Check for conflicting CSS classes

## 📞 Support

For issues or questions, please open an issue in the repository.

---

**Happy searching! 🔍📸🎬**
