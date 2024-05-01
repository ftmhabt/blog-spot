import { useContext, useRef } from "react";
import FetchPosts from "./fetch-posts";
import { BlogContext } from "../context/context";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';

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
      <ul className="flex flex-col gap-[1rem] text-[#FAFAFA]">
        {blog &&
          blog.posts?.map((post) => (
            <li className="card opacity-0 flex flex-col gap-[1rem] bg-[#2E2E2E] p-[1rem] rounded-3xl" key={post.id}>
                <div className="text-3xl font-bold">{post.title}</div>
                <div className="font-thin">{post.snippet}</div>
                <div className="font-thin flex">More <Icon className="self-center" path={mdiArrowRight} size={.7} /></div>
            </li>
          ))}
      </ul>
    </div>
  );
}
