import { useEffect, useContext } from "react";
import { createClient } from "@supabase/supabase-js";
import { BlogContext } from "../context/context";

const supabase = createClient(
  "https://jqdvolylksnursrcbhll.supabase.co",
  import.meta.env.VITE_ANON_KEY
);

export default function FetchPosts() {
  const blog = useContext(BlogContext);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      const { data }:{data:Array<object>|null} = await supabase.from("blogposts").select("*");
      blog.setPosts(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      blog.setIsLoading(false);
    }
  }
}
