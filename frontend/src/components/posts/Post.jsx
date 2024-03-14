export default function Post(post) {
    const user = useContext(UserContext);

    if (loading) return <div>loading...</div>
    if (error) return <div>an error occured...</div>


    return (
        <main>
            <p>{post.user}</p>
            <p>{post.date}</p>
            <p>{post.text}</p>
            <div>{post.likes}</div>
            {post.comments.map(comment => {
                return <div>
                    <p>{comment.user}</p>
                    <p>{comment.date}</p>
                    <p>{comment.text}</p>
                </div>
            })}
            <button>Like</button>
            <button>Comment</button>
            <button>Share</button>
        </main>
    )
}