import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`http://localhost:8000/jobs/${id}`);
        const data = await res.json();
        setJob(data);
        console.log(data);
      } catch (error) {
        console.log('Error fetching the data :' + error);
      }finally{
        setLoading(false)
      }
      

    }
setTimeout(()=>
  {
    fetchJob();
  }, 1000)

  }, [])

  return (
    loading ? <Spinner/> : (
      <h1>{job.title}</h1>
    )
  )
}

export default JobPage