# UIT Learning AI Web

An AI-powered educational web application built with React, inspired by Google Gemini.

## 🚀 Tech Stack

- **React** (v19.2.0) - Functional components with hooks
- **Vite** (v7.2.4) - Fast build tool and dev server
- **React Router** (v7.11.0) - Client-side routing
- **Tailwind CSS** (v4.1.18) - Utility-first CSS framework

## 📁 Project Structure

```
src/
 ├── components/     # Reusable React components
 │   ├── Navbar.jsx           # Navigation bar
 │   ├── ChatContainer.jsx    # Chat messages container
 │   ├── ChatMessage.jsx      # Individual message component
 │   ├── ChatInput.jsx        # Chat input with send button
 │   └── LoadingIndicator.jsx # AI typing indicator
 ├── pages/          # Page components (routes)
 │   ├── Home.jsx             # AI Chat Interface
 │   ├── Visualization.jsx    # AI Graph Visualization
 │   └── Concepts.jsx         # AI Concept Information
 ├── services/       # API services and business logic
 ├── data/           # Static data and constants
 ├── styles/         # Additional CSS styles
 ├── App.jsx         # Main App component with routing
 └── main.jsx        # Application entry point
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nhatlinhit/uit_ai_learning_agent.git
   cd uit_learning_ai_web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:

```bash
npm start
```

or

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Available Scripts

- `npm start` / `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## ✨ Features

### Current Features (STEP 1-3 Complete)

- ✅ Modern React with functional components and hooks
- ✅ Fast development with Vite HMR (Hot Module Replacement)
- ✅ Client-side routing with React Router (3 routes)
- ✅ Responsive design with Tailwind CSS
- ✅ Clean and scalable folder structure
- ✅ Responsive navigation bar with mobile menu
- ✅ Gemini-style AI chat interface
- ✅ Chat message components (user & AI)
- ✅ Loading/typing indicator
- ✅ Auto-scrolling chat container
- ✅ Enter key to send messages
- ✅ Smooth animations and transitions

### Coming Soon

- 🔄 AI integration for intelligent responses
- 🔄 Graph visualization features
- 🔄 Concept information system
- 🔄 User authentication
- 🔄 Database integration

## 🎨 Pages

- **Home (/)** - AI Chat Interface with message bubbles and typing indicator
- **AI Visualization (/visualization)** - Graph visualization (coming soon)
- **AI Concepts (/concepts)** - Concept information cards (coming soon)

## 📦 Dependencies

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router-dom": "^7.11.0",
  "tailwindcss": "^4.1.18",
  "@tailwindcss/postcss": "^4.1.18"
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.
