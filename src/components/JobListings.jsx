import React, { useEffect, useState } from "react";
import JobListing from "./JobListing";

function JobListings({ location }) {
  console.log("chceck location", location);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getJobs = async () => {
      let api;
      if (location == "/") {
        api = "/api/jobs?_limit=3";
      } else {
        api = "/api/jobs";
      }
      try {
        const res = await fetch(api);
        const data = await res.json();
        setJobs(data);
        console.log("jobs", jobs);
      } catch (error) {
        console.log("error", error);
      } finally {
      }
    };
    getJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl m-auto lg:container">
        <h2 className="mb-6 text-center text-3xl font-bold text-indigo-500">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {jobs.map((job) => {
            return <JobListing key={job.id} job={job} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default JobListings;
