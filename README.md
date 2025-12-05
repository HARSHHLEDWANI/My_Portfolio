# Portfolio Website

A clean, minimal, and modern portfolio website built with React, TailwindCSS, and Framer Motion.

## Features

- ✨ Modern, minimal design with neutral color palette
- 🌓 Dark/Light mode with system preference detection
- 📱 Fully responsive (desktop, tablet, mobile)
- 🎭 Smooth animations and micro-interactions
- 🔍 SEO optimized with meta tags
- 🎨 Clean component structure

## Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **React Router** - Routing
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **React Helmet Async** - SEO management
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## Project Structure

```
portfolio/
├── server/              # Backend API
│   ├── controllers/     # Route controllers
│   ├── routes/          # API routes
│   ├── server.js        # Express server entry point
│   ├── package.json
│   └── README.md
├── src/
│   ├── components/      # Reusable components
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── SectionWrapper.jsx
│   │   ├── SEO.jsx
│   │   └── ThemeToggle.jsx
│   ├── contexts/        # React contexts
│   │   └── ThemeContext.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   └── Resume.jsx
│   ├── sections/        # Page sections
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── ResumeSection.jsx
│   │   ├── Skills.jsx
│   │   └── WorkshopsActivities.jsx
│   ├── utils/           # Utility functions
│   │   └── api.js       # API client
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette for both light and dark modes.

### Content

Content is now managed through the backend API. Update the controllers in `server/controllers/`:
- `projectsController.js` - Projects data
- `skillsController.js` - Skills data
- `educationController.js` - Education data

### Resume Link

Update the Google Drive resume URL in:
- Frontend: `.env` file (`VITE_RESUME_DRIVE_URL`)
- Backend: `server/.env` file (`RESUME_DRIVE_URL`)

### Images

Add your images to the `public/` folder and update references in components.

## License

MIT

