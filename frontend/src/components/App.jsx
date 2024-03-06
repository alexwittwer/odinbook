import { useState, createContext, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from "./common/Header"
import Landing from "./common/Landing"
import SideBar from './common/SideBar'

export const UserContext = createContext(null)
export const LoginContext = createContext(null)


function App() {
  const url = useLocation()
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userstorage = localStorage.getItem("user")
    if (!userstorage) {
      return setUser(null)
    } else {
      const parsedUser = JSON.parse(userstorage)
      setUser(parsedUser)
    }
  }, [])

  return (
    <UserContext.Provider value={user}>
      <main className='flex flex-col justify-between h-screen'>
        <Header />
        <div className=' flex h-full'>
          <SideBar />
        {url.pathname === "/" ? <Landing /> : <Outlet />}
        </div>
      </main>
    </UserContext.Provider>
  )
}

export default App
