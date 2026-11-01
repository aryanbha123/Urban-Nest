# Urban Nest

A real estate listings website for properties in Dehradun, Lucknow and Unnao, built with React, Tailwind CSS and Material UI.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

## About

Urban Nest is a property showcase site. Visitors land on a marketing home page with investment highlights for Dehradun and Lucknow, browse a filterable list of properties, and open a detail page for each one. A contact form posts enquiries to a small Express server.

## Features

- **Home page**: hero section, auto-rotating image carousel, "why invest" sections for Lucknow and Dehradun, About, Services and Contact sections, with smooth in-page scrolling via `react-scroll`
- **Property listings** (`/properties`): filter by property type (Villa, Farm house, Raw house, Hostel and PG) and by location
- **Property details** (`/property/:id`): image carousel, key features (area, beds, baths, garages) and tabs for Video, Floor Plans and Location
- **Contact form**: sends name, email, phone and message to `POST /api/contact`
- **Lazy-loaded routes** with `React.lazy` and a custom loader as the `Suspense` fallback
- Responsive header that switches to a fixed bar on scroll

Property data is stored locally in `client/src/data.js`.

## Tech Stack

| Part | Technology |
| --- | --- |
| Frontend | React 18 (Create React App), React Router 6, Tailwind CSS, Material UI 5, react-material-ui-carousel, react-scroll |
| Backend | Node.js, Express, body-parser, cors |

## Project Structure

```
Urban-Nest/
├── client/
│   └── src/
│       ├── App.jsx            # routes and lazy loading
│       ├── data.js            # property listings
│       ├── pages/             # Home, Properties, Property, Card
│       ├── components/        # Header, Hero, Caursel, Invest, Stories, Dehradun, About, Service, Contact, footer, Loader
│       └── assets/            # images and theme
└── server/
    └── app.js                 # Express server with the contact endpoint
```

## Getting Started

### Prerequisites

- Node.js and npm

### Client

```bash
cd client
npm install
npm start          # http://localhost:3000
npm run build      # production build
npm test
```

### Server

```bash
cd server
npm install
node app.js        # http://localhost:5000
```

The contact form sends requests to `http://localhost:5000/api/contact`, so start the server to submit enquiries.

## API Endpoints

| Method | Endpoint | Body | Response |
| --- | --- | --- | --- |
| `POST` | `/api/contact` | `{ name, email, phone, message }` | `{ "message": "Message received" }` (the submission is logged on the server) |

## Author

**Aryan Bhandari**: [GitHub](https://github.com/aryanbha123)
