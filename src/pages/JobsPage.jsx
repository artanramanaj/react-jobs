import React from "react";
import JobListings from "../components/JobListings";
import { useLocation } from "react-router-dom";
function JobsPage() {
  const location = useLocation().pathname;
  return (
    <>
      <JobListings location={location} />
    </>
  );
}

export default JobsPage;
