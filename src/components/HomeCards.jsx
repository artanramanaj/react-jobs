import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
function HomeCards() {
  return (
    <>
      {/* <!-- Developers and Employers --> */}
      <section className="py-4">
        <div className="container-xl m-auto lg:container">
          <div className="grid grid-cols-1 gap-4 rounded-lg p-4 md:grid-cols-2">
            <Card
              bg="bg-indigo-200"
              className="rounded-lg bg-gray-100 p-6 shadow-md"
            >
              <h2 className="text-2xl font-bold">For Developers</h2>
              <p className="mt-2 mb-4">
                Browse our React jobs and start your career today
              </p>
              <Link
                to="/jobs"
                className="inline-block rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-700"
              >
                Browse Jobs
              </Link>
            </Card>
            <Card className="rounded-lg bg-indigo-100 p-6 shadow-md">
              <h2 className="text-2xl font-bold">For Employers</h2>
              <p className="mt-2 mb-4">
                List your job to find the perfect developer for the role
              </p>
              <Link
                to="/add-job"
                className="inline-block rounded-lg bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
              >
                Add Job
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeCards;
