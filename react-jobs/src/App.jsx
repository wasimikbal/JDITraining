import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  json
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import JobPage, {LoadJobData} from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import NotFoundPage from './pages/NotFoundPage'
import EditJobPage from './pages/EditJobPage'

const addJob = async(newJob) => {
  const res = await fetch('http://localhost:8000/jobs',
    {
      method: 'POST',
      headers: {
        'Content_Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    }
  );
  return;
}

const updateJob = async(updatedJob) => {
  const res = await fetch(`http://localhost:8000/jobs/${updatedJob.id}`,
    {
      method: 'PUT',
      headers: {
        'Content_Type': 'application/json'
      },
      body: JSON.stringify(updatedJob)
    }
  );
  return;
}

const deleteJob = async(jobId) => {
  const res = await fetch(`http://localhost:8000/jobs/${jobId}`,
  {
    method: 'DELETE'
  })
}

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route path='/' element={<HomePage />} />
    <Route path='/jobs' element={<JobsPage />} />
    <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={LoadJobData} />
    <Route path='/edit-job/:id' element={<EditJobPage UpdateJobSubmit={updateJob}/>} loader={LoadJobData} />
    <Route path='/add-job' element={<AddJobPage AddJobSubmit={addJob}/>}/>
    <Route path='*' element={<NotFoundPage />} />
  </Route>
))

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App