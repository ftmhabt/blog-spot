import { useParams } from "react-router-dom";
import { BlogContext } from "../context/context";
import { useContext } from "react";

export default function Post() {
  const { id } = useParams();
  const blog = useContext(BlogContext);

  return <div>{JSON.stringify(blog.posts?.filter(post=>post.id==id))} </div>;
}
