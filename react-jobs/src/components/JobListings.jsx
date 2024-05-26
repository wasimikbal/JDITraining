
import { useState, useEffect } from 'react'
import JobListing from './JobListing'
import { FadeLoader, MoonLoader, PuffLoader, ScaleLoader } from 'react-spinners'
import Spinner from './Spinner';

const JobListings = ({ isHome }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiURL = isHome ? 'http://localhost:8000/jobs?_limit=3': 'http://localhost:8000/jobs'
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(apiURL);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data: " + error);
      } finally {
        setLoading(false);
      }

    }

    setTimeout(() => {
      fetchJobs();
    }, 1000)


  }, [])


  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'All Jobs'}
        </h2>

        {
          loading ? (<Spinner />) :
            (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job) => {
                  return (
                    <JobListing key={job.id} job={job} />
                  )
                })}
              </div>
            )

        }

      </div>
    </section>

  )
}

export default JobListings