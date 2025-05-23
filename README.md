# Restaurant Listing Platform

A full-stack TypeScript application for managing restaurant listings.

## Tech Stack

### Frontend

- React (Vite)
- TypeScript
- Material UI
- Axios

### Backend

- Node.js
- Express
- TypeScript
- Sequelize ORM
- MySQL

## Project Structure

```
├── backend/
│   ├── src/
│   │   ├── config/             # Database configuration
│   │   ├── controllers/        # Route controllers
│   │   ├── interfaces/         # TypeScript interfaces
│   │   ├── models/            # Sequelize models
│   │   ├── repositories/      # Data access layer
│   │   ├── routes/            # API routes
│   │   ├── services/          # Business logic
│   │   ├── app.ts             # Express app setup
│   │   └── server.ts          # Server entry point
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/        # React components
    │   ├── services/         # API services
    │   ├── types/            # TypeScript types
    │   └── App.tsx           # Main app component
    └── package.json
```

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:

   ```
   PORT=3000
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASS=your_mysql_password
   DB_NAME=restaurant_listing
   DB_PORT=3306
   NODE_ENV=development
   ```

4. Create the MySQL database:

   ```sql
   CREATE DATABASE restaurant_listing;
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

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

## API Endpoints

- `GET /api/restaurants` - Get all restaurants
- `GET /api/restaurants/:id` - Get restaurant by ID
- `POST /api/restaurants` - Create new restaurant
- `PUT /api/restaurants/:id` - Update restaurant
- `DELETE /api/restaurants/:id` - Delete restaurant

## Features

- List all restaurants
- Add new restaurants
- Update restaurant details
- Delete restaurants
- Responsive Material UI design
- TypeScript type safety
- Repository pattern implementation
- SOLID principles compliance

## Development

The project follows SOLID principles and uses the repository pattern for data access. The frontend is built with Material UI for a modern, responsive design.

## License

MIT
#   R e s t a u r a n t - L i s t i n g - P l a t f o r m  
 