# P13 - Argent Bank Project

> Le projet 13 de la formation Openclassrooms Développeur Front-end "Utilisez une API pour un compte utilisateur bancaire avec React"
> 13th project of Front-end Web Developper training by OpenClassrooms "Use an API for a bank user account with React"

This codebase contains the code needed to run the backend and the frontend for Argent Bank.

## Getting Started

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- [React + Vite](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

### Instructions

1. Clone the repo onto your computer
2. Open a terminal window in the cloned project
3. Run the following commands:

## Backend

```bash
# Go to the back repository
cd back/

# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your back server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

### Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

### API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

## Frontend

```bash
# Go to the back repository
cd front/

# Install dependencies
npm install

# Start local dev server
npm run dev
```

Your front server should now be running at http://localhost:5173/!
