# react-media-app

- Current project

A media application that shows movies and TV series

Live Demo: https://react-media-app-snowy.vercel.app/

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Project Features](#usage)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Credits](#credits)
- [License](#license)

---

## Overview

### Motivation

- Personal project

To create an improved movie and TV application with more features, building from the knowledge I learnt from the react-movie-application project 
 

### Learning Outcomes

- Learnt you must store your personalised API key. Stored the key in vercel
- Learnt about setInterval() and clearSetInterval() functions to create slideshows
- Learnt about useMemo() function to store a result. This will only run when the dependencie changes and not   every time the page re-renders


## Project Features

- Used TMDB Movie database
- Movie and TV Series slideshows using a carousel
- Markers that change colour to hightlight the slide on display in the carousel
- Vertical Nav bar with icon animation CSS hover effects
- A section slides out behind the nav into view with the icon names when the navbar is entered
- A close button in the nav to slide the section with the icon names out of view
- A Trending section to display the top 20 trending Movies and trending TV series
- The Trendings sections have horizontal scrolling with left and right arrow buttons. The arrow buttons are only displayed when they can be interacted with
- hover effects on each movie card to display the movie rating, release date and overview
- Click on a moviecard to go to a page with more details about that movie

---

## Tech Stack

### Frontend

- React
- JavaScript
- HTML5
- CSS3

### Tools

- Git & GitHub
- VS Code

## Architecture

1.

Client (Frontend)

Folder Structure Example:

```

2.

client/
|
|
\---public
|   +---images
\---src
    |
    +---assets
    |   +---Fonts
    |
    +---components
        +---Footer
        |
        +---Header
        |
        +---HeroMovie
        |
        +---HeroTv
        |
        +---Home
        |
        +---MediaMovies
        |
        +---MediaTv
        |
        +---Nav
        |
        +---Trending

```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/pj74ncoding/react-media-app.git
cd  react-media-app

```

### Install Dependencies

Frontend:

```bash
cd react-media-app
npm install
```

### Run Development Servers

Frontend:

```bash
npm start
```

Add inside README:

```markdown
![Home Page](assets/home.png)
![Dashboard](assets/dashboard.png)
```

---

## Future Improvements

- Current project adding as I go along

---

## Credits

Developer: Peter Newman
GitHub: https://github.com/pj74ncoding

---

## License

This project is licensed under the MIT License.

