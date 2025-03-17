import React from "react";

function JobListing({ job }) {
  return (
    <>
      <div key={job.id} className="relative rounded-xl bg-white shadow-md">
        <div className="p-4">
          <div className="mb-6">
            <div className="my-2 text-gray-600">{job.type}</div>
            <h3 className="text-xl font-bold">{job.title}</h3>
          </div>

          <div className="mb-5">{job.description}</div>

          <h3 className="mb-2 text-indigo-500">{job.salary}</h3>

          <div className="mb-5 border border-gray-100"></div>

          <div className="mb-4 flex flex-col justify-between lg:flex-row">
            <div className="mb-3 text-orange-700">
              <i className="fa-solid fa-location-dot text-lg"></i>{" "}
              {job.location}
            </div>
            <a
              href={`/job/${job.id}`}
              className="h-[36px] rounded-lg bg-indigo-500 px-4 py-2 text-center text-sm text-white hover:bg-indigo-600"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobListing;
