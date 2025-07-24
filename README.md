# Candidate

A modern technical interview platform that creates a standard of fairness and integrity in the hiring process.

## Technology Stack

- **Frontend**: React 19, Vite
- **Styling**: CSS3, Material-UI (MUI)
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Material-UI Icons, React Icons

## Installation

### Prerequisites

- Node.js (version 20.19.0 or higher recommended)
- npm (comes with Node.js)

### Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd candidate
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Locally

### Development Server

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Other Available Scripts

- **Build for production**:
  ```bash
  npm run build
  ```

- **Preview production build**:
  ```bash
  npm run preview
  ```

- **Lint code**:
  ```bash
  npm run lint
  ```

- **Clean build directory**:
  ```bash
  npm run clean
  ```

## Project Structure

```
candidate/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Page components (Home, Contact)
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── package.json            # Project dependencies and scripts
└── README.md              # This file
```
