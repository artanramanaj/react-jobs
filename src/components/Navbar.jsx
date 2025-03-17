import React from "react";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <>
      <nav className="border-b border-indigo-500 bg-indigo-700">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <a
                className="mr-4 flex flex-shrink-0 items-center"
                href="/index.html"
              >
                <img className="h-10 w-auto" src={logo} alt="React Jobs" />
                <span className="ml-2 hidden text-2xl font-bold text-white md:block">
                  React Jobs
                </span>
              </a>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <a
                    href="/index.html"
                    className="rounded-md bg-black px-3 py-2 text-white hover:bg-gray-900 hover:text-white"
                  >
                    Home
                  </a>
                  <a
                    href="/jobs.html"
                    className="rounded-md px-3 py-2 text-white hover:bg-gray-900 hover:text-white"
                  >
                    Jobs
                  </a>
                  <a
                    href="/add-job.html"
                    className="rounded-md px-3 py-2 text-white hover:bg-gray-900 hover:text-white"
                  >
                    Add Job
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
