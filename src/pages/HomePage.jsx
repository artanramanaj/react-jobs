import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";
import { useLocation } from "react-router-dom";
function HomePage() {
  const location = useLocation().pathname;
  return (
    <>
      <Hero
        title="   Become a React Dev"
        subtitle=" Find the React job that fits your skills and needs"
      />
      <HomeCards />
      <JobListings location={location} />
      <ViewAllJobs />
    </>
  );
}

export default HomePage;
