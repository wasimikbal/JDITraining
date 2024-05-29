import React from "react";
import { Link } from "react-router-dom";
/**
 * A Component to display a link to go to the all jobs page;
 * @function ViewAllJobs
 * @returns {JSX.Element}
 * @author Waseem Iqbal
 */
const ViewAllJobs = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <Link
        to="/jobs"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >
        View All Jobs
      </Link>
    </section>
  );
};

export default ViewAllJobs;
