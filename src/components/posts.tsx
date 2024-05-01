import { useContext, useRef } from "react";
import FetchPosts from "./fetch-posts";
import { BlogContext } from "../context/context";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Posts() {
  FetchPosts();
  const blog = useContext(BlogContext);

  //animation
  gsap.registerPlugin(useGSAP);
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(".card", { stagger: 1, x: -30, opacity: 0 },{ stagger:1, x: 0, opacity: 1 });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      {blog.isLoading && <div>{"Loading..."}</div>}
      <ul>
        {blog &&
          blog.posts?.map((post) => (
            <li className="card opacity-0" key={post.id}>
              {post.title}
            </li>
          ))}
      </ul>
    </div>
  );
}
