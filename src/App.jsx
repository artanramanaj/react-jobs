import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero
        title="   Become a React Dev"
        subtitle=" Find the React job that fits your skills and needs"
      />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
}

export default App;
