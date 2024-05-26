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

const addJob = async(newJob) => {
  const res = await fetch('http://localhost:8000/jobs',
    {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content_Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    }
  );
  return;
}

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route path='/' element={<HomePage />} />
    <Route path='/jobs' element={<JobsPage />} />
    <Route path='/jobs/:id' element={<JobPage/>} loader={LoadJobData} />
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