# Client REST API with Express

This project is a client application for a REST API built with Express. It uses React for the user interface and Vite as the build tool. The application allows users to manage a movie list, including creating, updating, deleting, and viewing movies.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast build tool for modern web projects.
- **Tailwind CSS**: CSS framework for quick and efficient design.
- **Zustand**: Library for global state management in React.
- **React Router**: Library for routing in React applications.
- **Formik and Yup**: Libraries for form management and validation.
- **Sonner**: Library for notifications.
- **NextUI**: UI component library for React.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Keiner28/Client-Api-Rest-Express.git
   ```
2. Install the dependencies:
   ```sh
   pnpm install
   ```

## Available Scripts

In the `package.json` file, you will find the following scripts:

- `dev`: Start the development server.
  ```sh
  pnpm run dev
  ```
- `build`: Build the application for production.
  ```sh
  pnpm run build
  ```
- `lint`: Run ESLint to analyze the code.
  ```sh
  pnpm run lint
  ```
- `preview`: Preview the built application.
  ```sh
  pnpm run preview
  ```

## Configuration

- `vite.config.js`: Vite configuration.
- `tailwind.config.js`: Tailwind CSS configuration.
- `eslint.config.js`: ESLint configuration.

## Folder Structure

- `public/`: Public files.
- `src/`: Application source code.
  - `assets/`: Static resources like images and styles.
  - `components/`: React components.
    - `common/`: Reusable components throughout the application.
    - `form/`: Components related to forms.
    - `icons/`: Icon components.
    - `layout/`: Layout components of the application.
  - `hooks/`: Custom React hooks.
  - `pages/`: Application pages.
  - `routes/`: Application routing configuration.
  - `services/`: Services to interact with the API.
  - `store/`: Global application state managed with Zustand.
  - `styles/`: Application CSS styles.
  - `config.js`: Application configuration file.
  - `router.jsx`: Application router configuration.

## Usage

### Hooks

- [`useHeaderLogic`](src/hooks/useHeader.js): Logic for the header component.
- [`useMovieCard`](src/hooks/useMovieCard.js): Logic for the movie card component.
- [`useMovieForm`](src/hooks/useMovieForm.js): Logic for the movie form.

### Components

- [`Header`](src/components/layout/Header.jsx): Header component.
- [`NotFound404`](src/pages/NotFound404.jsx): 404 error page.

## Contact

- ✉️[keinergodinez@gmail.com](mailto:keinergodinez@gmail.com)
- <a href="https://www.linkedin.com/in/keiner28/"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-Keiner%20Godinez-blue?style=flat-square&logo=linkedin"></a>