# Post Manager Application

A full-stack web application for managing and displaying posts with a Node.js backend and React frontend.

## Project Overview

Post Manager is a simple social posting application that allows users to create, view, and manage posts. The application features a RESTful API backend built with Node.js and Express, and a modern React frontend built with Vite.

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **Git** (for version control)
- **MongoDB** (for database storage)

## Installation

### Backend Setup

1. Navigate to the Backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment configuration (if needed):
```bash
# Create a .env file with your configuration
```

4. Start the backend server:
```bash
npm start
```

The server will run on `http://localhost:3000` (or the configured port).

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173` (Vite default port).

## Running the Application

To run both the backend and frontend simultaneously:

### Option 1: Separate Terminals

**Terminal 1 - Backend:**
```bash
cd Backend
npm install
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install
npm run dev
```

### Option 2: Using Concurrently (if configured)

If you have a root `package.json` with concurrently installed, run:
```bash
npm run dev
```

## Features

- **Create Posts**: Users can create new posts with content
- **View Feed**: Browse all posts in a feed layout
- **Responsive Design**: Works on desktop and mobile devices

## API Endpoints

### Post Routes

- `GET /api/posts` - Retrieve all posts
- `GET /api/posts/:id` - Retrieve a specific post
- `POST /api/posts` - Create a new post


## Technologies Used

### Backend
- Node.js
- Express.js
- Database (configured in db.js)

### Frontend
- React 18+
- Vite
- CSS3
- ESLint for code quality

## Development

### Backend Development

Edit files in `Backend/src/` and the server will reflect changes (with appropriate restart if needed).

### Frontend Development

The frontend uses Vite's Hot Module Replacement (HMR) for instant updates during development.

## Build for Production

### Backend
```bash
cd Backend
npm run build
```

### Frontend
```bash
cd frontend
npm run build
```

## Troubleshooting

- **Port already in use**: Change the port in the backend configuration
- **Module not found**: Run `npm install` in both Backend and frontend directories
- **CORS issues**: Check the backend CORS configuration in `src/app.js`
- **Database connection error**: Verify database configuration in `src/db/db.js`

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact
For questions or support, please contact [thakur211222@gmail.com].
