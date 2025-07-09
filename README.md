# Express Basic Starter App

A basic Express.js application starter project using TypeScript

## File / Folder Structure

```
📁 src
├── 📁 config          # Configuration files (e.g., database, environment variables)
├── 📁 controllers     # Business logic (handles requests/responses)
├── 📁 middlewares     # Custom middleware (authentication, logging, error handling)
├── 📁 models          # Database models & schemas
├── 📁 routes          # API route definitions
├── 📁 services        # Business logic or external API interactions
├── 📁 utils           # Helper functions and utilities
├── app.ts             # Main application file (the Express application blueprint)
├── server.ts          # Server entry point (the server launcher)
```

## Hierarchy

Server > App > Router > Controller > Service

- Server (Entry Point, e.g., `src/server.ts`)
  - **Role**: This is the absolute starting point of your application. It's the file you actually execute
- App (Express Application Configuration, e.g., `src/app.ts`)
  - **Role**: This file contains the main Express application instance
- Router (Route Definitions, e.g., `src/routes/dogRouter.ts`)
  - **Role**: An Express Router is a mini-application that can handle specific routes
- Controller (Request Handlers, e.g., `src/controllers/dogController.ts`)
  - **Role**: This is the direct handler for an incoming request after it matches a route
- Service (Business Logic / Data Access, e.g., `src/services/dogService.ts`)
  - **Role**: This layer contains the core business logic and handles interactions with data sources

### Visualizing the Flow:

1. A client sends an HTTP request (e.g., `GET` `/api/dogs/1`).
2. The Server (`src/index.ts`) is listening and receives the request.
3. The request passes through global middleware defined in App (`src/app.ts`) (e.g., request logging, JSON parsing).
4. App matches the `/api/dogs` part of the URL to the `dogRouter`.
5. The `dogRouter` then matches the `/:id` part (where `id` is `1`) to its `getDogById` method, which is handled by the `DogController`.
6. The `DogController`'s `getDogById` method takes `req.params.id`.
7. The `DogController` calls `dogService.getDogById(1)`.
8. The `DogService` retrieves the dog data (from your array or a database).
9. The `DogService` returns the data to the `DogController`.
10. The `DogController` formats the data and sends an HTTP response (`res.json(...)`).
11. If any errors occur at any stage, the request might fall through to the global error handling middleware in App.
