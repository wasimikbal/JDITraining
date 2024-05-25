import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Homepage from './pages/Homepage'
import JobsPage from './pages/JobsPage'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route path='/' element={<Homepage />} />
    <Route path='/jobs' element={<JobsPage />} />
  </Route>
))

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App