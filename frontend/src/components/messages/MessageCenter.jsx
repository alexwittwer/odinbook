import { useContext } from "react"
import { UserContext } from "../App"
import { useNavigate } from "react-router-dom"

export default function MessageCenter() {
  const user = useContext(UserContext)
  const navigate = useNavigate();

  if (!user) return navigate("/");
  return (
    <main>
      <p>Message Center</p>
    </main>
  )
}