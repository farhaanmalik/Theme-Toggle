
# Theme Toggle App

This is a simple theme toggle application built with Vite and React. The app allows users to switch between light and dark themes, and it uses the Context API to manage the global theme state. The theme preference is saved in `localStorage` to persist between sessions.

## Features

- Toggle between light and dark themes.
- Theme state is managed globally using the Context API.
- Theme preference is saved in `localStorage`.
- Smooth transitions between themes.

## Demo

[Live Demo](https://theme-toggle-app.vercel.app/) <!-- Add your deployed GitHub Pages link here -->

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/theme-toggle-app.git
   cd theme-toggle-app
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```

4. **Build for Production:**
   ```bash
   npm run build
   ```

## Usage

1. Clone the repository and navigate to the project directory.
2. Run the development server to view the app on `localhost`.
3. Use the toggle button to switch between light and dark themes.

## Context API Overview

The `ThemeContext.js` file is used to create a context for the theme state. This allows any component in the application to access and modify the theme state without passing props.

```jsx
import React, { createContext, useState, useEffect } from "react";

// Create Context
export const ThemeContext = createContext();

// Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue.

## License

This project is licensed under the MIT License.

