# React Assignment

This project is a React application that includes various components for user interaction, including a counter, dashboard, rich text editor, and authentication forms. Below is a brief overview of each component and its functionality.

## Components

### 1. CounterComp
- **File:** `src/components/CounterComp.jsx`
- **Description:** Implements a counter with increment, decrement, and reset functionalities. It maintains a count state and dynamically adjusts the background color based on the count value.

### 2. DashboardComp
- **File:** `src/components/DashboardComp.jsx`
- **Description:** Displays a dashboard with a user activity chart and a counter. It allows users to increment and decrement a counter, which updates the chart data accordingly.

### 3. Home
- **File:** `src/components/Home.jsx`
- **Description:** Serves as the landing page of the application. It provides navigation links to other components, including the Counter, User Form, Text Editor, and Dashboard pages.

### 4. RichTextComp
- **File:** `src/components/RichTextComp.jsx`
- **Description:** Features a rich text editor using ReactQuill. It allows users to input and format text, and it displays the output below the editor.

### 5. SignIn
- **File:** `src/components/SignIn.jsx`
- **Description:** Provides a sign-in form for users to log in. It captures email and password inputs and navigates to the dashboard upon submission.

### 6. SignUp
- **File:** `src/components/SignUp.jsx`
- **Description:** Presents a sign-up form for new users. It collects first name, last name, email, and password, and navigates to the dashboard upon successful submission.

## Application Structure

- **Main Application Component:** `src/App.jsx`
  - Sets up routing for the application using React Router.
  - Defines routes for the Home, Sign In, Sign Up, Dashboard, Counter, and Rich Text Editor components.

## Installation

To run this project, clone the repository and install the dependencies:

```bash
npm install
```

## Usage

After installing the dependencies, you can start the application with:

```bash
npm start
```

This will run the app in development mode, and you can view it in your browser at `http://localhost:3000`.

## License

This project is open-source and available under the MIT License.
