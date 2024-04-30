import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    "https://jqdvolylksnursrcbhll.supabase.co",
    import.meta.env.VITE_ANON_KEY
  );

export default function FetchPosts() {
    
  const [posts, setPosts] = useState<Array<object> | null>([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      const { data } = await supabase.from("blogposts").select("*");
      setPosts(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

return posts;

}
