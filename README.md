# Post Manager Application

A full-stack web application for managing and sharing posts with a Node.js backend and React frontend.

## Project Overview

Post Manager is a social posting application that allows users to create, view, and manage posts. The application features a RESTful API backend built with Node.js and Express, and a modern React frontend built with Vite.

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **Git** (for version control)

## Project Structure

```
post_manager/
├── Backend/                 # Node.js/Express server
│   ├── package.json
│   ├── server.js           # Server entry point
│   ├── src/
│   │   ├── app.js          # Express app configuration
│   │   ├── db/
│   │   │   └── db.js       # Database connection
│   │   ├── models/
│   │   │   └── post.model.js  # Post data model
│   │   └── services/
│   │       └── storage.service.js  # Storage service
│   └── node_modules/
│
└── frontend/                # React/Vite application
    ├── package.json
    ├── vite.config.js
    ├── eslint.config.js
    ├── index.html
    ├── README.md
    ├── src/
    │   ├── main.jsx         # Entry point
    │   ├── App.jsx          # Main app component
    │   ├── index.css        # Global styles
    │   ├── assets/          # Static assets
    │   └── pages/
    │       ├── createPost.jsx   # Create post page
    │       └── feed.jsx         # Feed page
    ├── public/              # Public assets
    └── node_modules/
```

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
- **Post Management**: Manage and organize posts
- **Responsive Design**: Works on desktop and mobile devices

## API Endpoints

### Post Routes

- `GET /api/posts` - Retrieve all posts
- `GET /api/posts/:id` - Retrieve a specific post
- `POST /api/posts` - Create a new post
- `PUT /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post

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

## Support

For issues or questions, please open an issue in the repository or contact the development team.
