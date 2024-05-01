import { useContext } from "react";
import FetchPosts from "./fetch-posts";
import { BlogContext } from "../context/context";

export default function Posts() {
  FetchPosts();
  const blog = useContext(BlogContext);

  return (
    <div>
      <ul>
        {blog && blog.posts?.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}
