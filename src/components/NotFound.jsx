import React from "react";
import { Link } from "react-router-dom";
import { FaTriangleExclamation } from "react-icons/fa6";
function NotFound() {
  return (
    <>
      <section className="flex h-96 flex-col items-center justify-center text-center">
        <FaTriangleExclamation className="fas fa-exclamation-triangle fa-8x mb-4 text-8xl text-yellow-400"></FaTriangleExclamation>
        <h1 className="mb-4 text-6xl font-bold">404 Not Found</h1>
        <p className="mb-5 text-xl">This page does not exist</p>
        <Link
          to="/"
          className="mt-4 rounded-md bg-indigo-700 px-3 py-2 text-white hover:bg-indigo-900"
        >
          Go Back
        </Link>
      </section>
    </>
  );
}

export default NotFound;
