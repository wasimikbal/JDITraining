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

/**
 * Add a new job to the database.
 * @param {Object} newJob - The new job data to be added.
 * @returns {Promise<void>} A Promise indicating the completion of the operation.
 */

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

/**
 * Update an existing job in the database.
 * @param {Object} updatedJob - The updated job data.
 * @returns {Promise<void>} A Promise indicating the completion of the operation.
 */
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

/**
 * Delete a job from the database.
 * @param {number} jobId - The ID of the job to be deleted.
 * @returns {Promise<void>} A Promise indicating the completion of the operation.
 */

const deleteJob = async(jobId) => {
  const res = await fetch(`http://localhost:8000/jobs/${jobId}`,
  {
    method: 'DELETE'
  })
}

/**
 * Create a router instance with all of the routes defined.
 */
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

/**
 * Main function to render the application.
 * @returns {JSX.Element} The application component wrapped with RouterProvider.
 */

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App