import { useContext, useRef } from "react";
import FetchPosts from "./fetch-posts";
import { BlogContext } from "../context/context";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Posts() {
  FetchPosts();
  const blog = useContext(BlogContext);

  gsap.registerPlugin(useGSAP);

  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to(".box", { stagger: 1, x: 30, opacity: 1 });
    },
    { scope: container }
  );
  return (
    <div ref={container}>
      <div>{blog.isLoading && "Loading..."}</div>
      <ul>
        {blog &&
          blog.posts?.map((post) => (
            <li className="box opacity-0" key={post.id}>
              {post.title}
            </li>
          ))}
      </ul>
    </div>
  );
}
