import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/common/ErrorPage'
import Feed from './components/common/Feed.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{
      path: '/home',
      element: <Feed />,
    },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
