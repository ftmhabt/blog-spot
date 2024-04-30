import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://jqdvolylksnursrcbhll.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxZHZvbHlsa3NudXJzcmNiaGxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MjA1ODksImV4cCI6MjAyOTk5NjU4OX0.9HupmF5VSvone4YrG1_UT7IffX9cYS3I-LVet7xaaNw"
);

function App() {
  const [posts, setPosts] = useState<Array<object> | null>([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      const { data } = await supabase.from("blogposts").select('*');
      setPosts(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default App;
