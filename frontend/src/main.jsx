import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/common/ErrorPage'
import Feed from './components/common/Feed.jsx'
import MessageCenter from './components/messages/MessageCenter.jsx'
import Profile from './components/users/Profile.jsx'
import Settings from './components/users/Settings.jsx'
import Login from './components/users/Login.jsx'
import Signup from './components/common/Signup.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{
      path: '/home',
      element: <Feed />,
    },
    {
      path: '/messages',
      element: <MessageCenter />,
    },
    {
      path: '/settings',
      element: <Settings />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/profile',
      element: <Profile />,
    }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
