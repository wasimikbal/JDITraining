import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
import Spinner from '../components/Spinner'

const JobPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true)
  const job = useLoaderData();
  setTimeout(() => setLoading(false), 1000)


  return (
    loading ? <Spinner /> : (
      <h1>{job.title}</h1>
    )
  )
}

const LoadJobData = async ({params}) => {
  const res = await fetch(`http://localhost:8000/jobs/${params.id}`)
  const data = await res.json();
  return data;
}

export {JobPage as default, LoadJobData}