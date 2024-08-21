import "./App.css";

import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";

//material ui fonts imports
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { BrowserRouter as Router,Route, Routes,useLocation } from "react-router-dom";

import JobPage from "./page/JobPage";
import Navbar from "../src/components/Navbar";

import Home from "./page/Home";
import LoginPage from "./page/login/LoginPage";
import SignupPage from "./page/signup/SignupPage";

// const theme = createTheme({
//   fontFamily: 'Montserrat, sans-serif',
//   defaultRadius: 'md',
// });

function App() {
  const location = useLocation();

  // Conditionally hide the Navbar on Login and Signup pages
  const shouldShowNavbar = !["/login", "/signup"].includes(location.pathname);

  return (
    <MantineProvider>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </MantineProvider>
  );
}

function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default WrappedApp;