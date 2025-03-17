import React from "react";
import JobListings from "../components/JobListings";
import { useLocation } from "react-router-dom";
import ViewAllJobs from "../components/ViewAllJobs";
function JobsPage() {
  const location = useLocation().pathname;
  return (
    <>
      <JobListings location={location} />
      <ViewAllJobs url="/" text="Back To Homepage" />
    </>
  );
}

export default JobsPage;
