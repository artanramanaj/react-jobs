import React from "react";
import { Link } from "react-router-dom";
function ViewAllJobs({ url, text }) {
  return (
    <>
      <section className="m-auto my-10 max-w-lg px-6">
        <Link
          to={url}
          className="block rounded-xl bg-black px-6 py-4 text-center text-white hover:bg-gray-700"
        >
          {text}
        </Link>
      </section>
    </>
  );
}

export default ViewAllJobs;
