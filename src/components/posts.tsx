import { useContext, useRef } from "react";
import FetchPosts from "./fetch-posts";
import { BlogContext } from "../context/context";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import { useNavigate } from "react-router-dom";

export default function Posts() {
  FetchPosts();
  const blog = useContext(BlogContext);

  //animation
  gsap.registerPlugin(useGSAP);
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        ".card",
        { stagger: 1, x: -30, opacity: 0 },
        { stagger: 1, x: 0, opacity: 1 }
      );
    },
    { scope: container }
  );

  const navigate = useNavigate()

  return (
    <div ref={container}>
      {blog.isLoading && <div>{"Loading..."}</div>}
      <ul className="grid grid-cols-auto-fit-250 gap-[1rem] text-[#FAFAFA]">
        {blog &&
          blog.posts?.map((post) => (
            <li
              className="card opacity-0 flex flex-col gap-[1rem] bg-[#2E2E2E] p-[1rem] rounded-3xl
              hover:bg-[#FAFAFA] hover:text-[#2E2E2E] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer"
              key={post.id}  onClick={()=>navigate(`posts/${post.id}`)}
            >
              <div className="text-3xl font-bold">{post.title}</div>
              <div className="font-thin">{post.snippet}</div>
              <div className="font-thin flex mt-auto"> 
                More <Icon className="self-center" path={mdiArrowRight} size={0.7} />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
