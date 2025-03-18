import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { FaMapMarker } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function JobPage() {
  const [job, setJob] = useState(null);
  const { id: jobId } = useParams();
  const [showSpinner, setShowSpinner] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getJobs = async () => {
      const api = "/api/jobs";
      try {
        setShowSpinner(true);
        const res = await fetch(api);
        const data = await res.json();
        console.log("check final data", data);
        const foundJob = data.find((d) => d.id == jobId);
        setJob(foundJob || null);
      } catch (error) {
        console.log("error", error);
        setJob(null);
      } finally {
        setShowSpinner(false);
      }
    };
    getJobs();
  }, [jobId]);

  const deleteJob = async () => {
    try {
      const response = await fetch(`/api/jobs/${jobId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      toast.success("Job added successfully!");
      navigate("/jobs");
    } catch (error) {
      throw new Error("can not delete this job");
      toast.error("Failed to add job.");
    }
  };

  if (showSpinner) {
    return <Spinner />;
  }

  if (!job) {
    return (
      <section>
        <div className="container m-auto px-6 py-6">
          <Link
            to="/"
            className="flex items-center text-indigo-500 hover:text-indigo-600"
          >
            <FaArrowLeft className="fas fa-arrow-left mr-2" />
            Back to Job Listings
          </Link>
          <p className="mt-4 text-gray-600">Job not found.</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <div></div>
      <section>
        <div className="container m-auto px-6 py-6">
          <Link
            to="/"
            className="flex items-center text-indigo-500 hover:text-indigo-600"
          >
            <FaArrowLeft className="fas fa-arrow-left mr-2" />
            Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto px-6 py-10">
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            <main>
              <div className="rounded-lg bg-white p-6 text-center shadow-md md:text-left">
                <div className="mb-4 text-gray-500">{job.type}</div>
                <h1 className="mb-4 text-3xl font-bold">{job.title}</h1>
                <div className="mb-4 flex justify-center align-middle text-gray-500 md:justify-start">
                  <FaMapMarker className="fa-solid fa-location-dot mr-2 text-lg text-orange-700" />
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-6 text-lg font-bold text-indigo-800">
                  Job Description
                </h3>
                <p className="mb-4">{job.description}</p>
                <h3 className="mb-2 text-lg font-bold text-indigo-800">
                  Salary
                </h3>
                <p className="mb-4">{job.salary} / Year</p>
              </div>
            </main>

            <aside>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-6 text-xl font-bold">Company Info</h3>
                <h2 className="text-2xl">{job.company.name}</h2>
                <p className="my-2">{job.company.description}</p>
                <hr className="my-4" />
                <h3 className="text-xl">Contact Email:</h3>
                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company.contactEmail}
                </p>
                <h3 className="text-xl">Contact Phone:</h3>
                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company.contactPhone}
                </p>
              </div>

              <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-6 text-xl font-bold">Manage Job</h3>
                <Link
                  to="/"
                  className="focus:shadow-outline mt-4 block w-full rounded-full bg-indigo-500 px-4 py-2 text-center font-bold text-white hover:bg-indigo-600 focus:outline-none"
                >
                  Edit Job
                </Link>
                <button
                  onClick={deleteJob}
                  className="focus:shadow-outline mt-4 block w-full cursor-pointer rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600 focus:outline-none"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}

export default JobPage;
