import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import JobPage, {LoadJobData} from './pages/JobPage'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route path='/' element={<HomePage />} />
    <Route path='/jobs' element={<JobsPage />} />
    <Route path='/jobs/:id' element={<JobPage/>} loader={LoadJobData} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>
))

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App