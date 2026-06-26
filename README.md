# Socionics PWA

A modern **Progressive Web Application** built with **Vue 3**, **Vite**, **Vue Router**, **Pinia**, and **vite-plugin-pwa**. Fully configured for deployment to **Vercel** without additional setup.

## 🚀 Features

- ✅ **Progressive Web App** - Installable on desktop and mobile with offline support
- ✅ **Vue 3 Composition API** - Modern, reactive component development
- ✅ **Vite** - Lightning-fast build tool and dev server
- ✅ **Vue Router** - Client-side routing for single-page application
- ✅ **Pinia** - Lightweight state management
- ✅ **vite-plugin-pwa** - Service worker and PWA manifest generation
- ✅ **ESLint & Prettier** - Code quality and formatting
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Vercel Ready** - Zero-configuration deployment

## 📁 Project Structure

```
src/
├── components/      # Reusable Vue components
├── views/           # Page components for routes
├── router/          # Vue Router configuration
├── stores/          # Pinia state management stores
├── composables/     # Reusable composition functions
├── services/        # API and external service calls
├── utils/           # Utility functions and helpers
├── assets/          # Static assets and CSS
├── App.vue          # Root component
└── main.js          # Application entry point

public/             # Static assets and PWA files
index.html          # HTML entry point
vite.config.js      # Vite configuration
vercel.json         # Vercel deployment configuration
```

## 📦 Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:5173`

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

5. **Lint code**
   ```bash
   npm run lint
   ```

6. **Format code**
   ```bash
   npm run format
   ```

## 🔧 Configuration

### Vite Config (`vite.config.js`)

- Path alias: `@` → `src/`
- PWA configuration with offline support
- Automatic service worker generation
- Workbox caching strategies
- Production optimizations

### ESLint (`.eslintrc.cjs`)

Vue 3 + Recommended ESLint configuration with plugin support.

### Prettier (`.prettierrc`)

Consistent code formatting across the project.

## 🌐 PWA Features

The application includes complete PWA support:

- **Offline Support** - Service worker caches assets and API responses
- **Installable** - Add to home screen on iOS/Android or as Windows/macOS app
- **Web Manifest** - `manifest.webmanifest` defines app metadata
- **Icons** - Multiple sizes for different platforms
- **Shortcuts** - Quick access from app launcher

## 🚀 Deployment to Vercel

No additional configuration needed! The project is pre-configured:

1. Connect your GitHub repository to Vercel
2. Vercel automatically detects `package.json` and builds the project
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deployment happens automatically on every push

### Manual Deployment

```bash
npm install -g vercel
vercel
```

## 📱 Installing as PWA

### Desktop (Chrome/Edge)
1. Open the application
2. Click the install icon in the address bar
3. Click "Install"

### Mobile (iOS)
1. Open in Safari
2. Tap Share → Add to Home Screen
3. Name the shortcut and add

### Mobile (Android)
1. Open in Chrome
2. Tap Menu (three dots) → Install app
3. Confirm installation

## 🛠 Development Workflow

### Creating a New Page

1. Create component in `src/views/MyPage.vue`
2. Add route in `src/router/index.js`
3. Add navigation link in `src/App.vue`

### Creating a Reusable Component

1. Create component in `src/components/MyComponent.vue`
2. Import and use in other components

### Managing State

Use Pinia stores in `src/stores/`:

```javascript
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMyStore = defineStore('my', () => {
  const state = ref(initialValue)
  return { state }
})
```

### Creating Composables

Reusable logic in `src/composables/`:

```javascript
import { ref, computed } from 'vue'

export const useMyComposable = () => {
  const value = ref(0)
  return { value }
}
```

## 🔑 Path Aliases

Use `@` to reference the `src/` directory:

```javascript
import { useAppStore } from '@/stores/app'
import Button from '@/components/Button.vue'
```

## 📚 Technologies

- [Vue 3 Docs](https://vuejs.org)
- [Vite Docs](https://vitejs.dev)
- [Vue Router Docs](https://router.vuejs.org)
- [Pinia Docs](https://pinia.vuejs.org)
- [vite-plugin-pwa](https://vite-plugin-pwa.netlify.app)

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ using Vue 3, Vite, and modern web technologies**
