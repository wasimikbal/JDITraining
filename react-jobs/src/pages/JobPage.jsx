import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import React from "react";
import { useLoaderData, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

/**
 * Functional component for rendering a job page.
 * @param {Object} props - The component props.
 * @param {Function} props.deleteJob - Function to delete a job.
 * @returns {JSX.Element} JSX element representing the job page.
 * @author Waseem Iqbal
 */
const JobPage = ({ deleteJob }) => {
  /**
   * Retrieves job data using a hook from React Router.
   * @type {Object}
   */
  const job = useLoaderData();

  /**
   * Navigation function from React Router.
   * @type {Function}
   */
  const navigate = useNavigate();

  /**
   * Sets loading to false after a delay.
   */
  setTimeout(() => setLoading(false), 1000);

  /**
   * Handler function for deleting a job.
   * @param {number} jobId - The ID of the job to be deleted.
   * @returns {void}
   */
  const OnClickDelete = (jobId) => {
    /**
     * Displays a confirmation dialog before deleting the job.
     */
    const confirm = window.confirm("Are you sure you want to delete this job");
    if (!confirm) return;

    /**
     * Calls the deleteJob function with the job ID.
     */
    deleteJob(jobId);

    /**
     * Displays a success toast after successful deletion.
     */
    toast.success("Job deleted successfully");

    /**
     * Navigates to the jobs page after deletion.
     */
    return navigate("/jobs");
  };

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarker className="text-orange-700 mr-1.5 mt-0.5" />
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p className="mb-4">{job.description}</p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Salary
                </h3>

                <p className="mb-4">{job.salary} / Year</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              {/* <!-- Company Info --> */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>

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

              {/* <!-- Manage --> */}
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => OnClickDelete(job.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const LoadJobData = async ({ params }) => {
  const res = await fetch(`http://localhost:8000/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, LoadJobData };
