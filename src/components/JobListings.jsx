import React from "react";
import jobs from "../jobs.json";
import JobListing from "./JobListing";

function JobListings({ location }) {
  let recentJobs;
  if (location == "/") {
    recentJobs = jobs.slice(0, 3);
  } else {
    recentJobs = jobs;
  }
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl m-auto lg:container">
        <h2 className="mb-6 text-center text-3xl font-bold text-indigo-500">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {recentJobs.map((job) => {
            return <JobListing key={job.id} job={job} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default JobListings;
