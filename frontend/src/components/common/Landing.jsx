import { useContext } from "react"
import { UserContext } from "../App"

export default function Landing() {
    const user = useContext(UserContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/api/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [posts]);



    return (
        <main className="flex items-center justify-center h-full">
            <p className="text-6xl">Landing Page</p>
        </main>
    )
}