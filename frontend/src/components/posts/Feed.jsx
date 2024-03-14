import { useContext } from "react";
import dataLoader from "../../utils/dataLoader"
import { UserContext } from "../App";
import Post from "./Post";

export default function Feed() {
    const user = useContext(UserContext);
    const [loading, data, error] = dataLoader(url);

    if (loading) return <div>loading...</div>
    if (error) return <div>an error occured...</div>

    return (
        <main className=" text-3xl">
            {data && data.map(post => {
                return <div>
                    <Post key={post._id} post={post} />
                </div>
            })}
        </main>
    )
}