import FetchPosts from "./fetch-posts"

export default function Posts() {

   const posts = FetchPosts();
  return (
    <div>
     <ul>
       {posts?.map((post) => (
         <li key={post.id}>{post.title}</li>
       ))}
     </ul>
    </div>
  )
}
