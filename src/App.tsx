import Index from "./pages";
import { BlogContext } from "./context/context";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState<Array<object>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <div>
      <BlogContext.Provider
        value={{ posts, setPosts, isLoading, setIsLoading }}
      >
        <Index />
      </BlogContext.Provider>
    </div>
  );
}

export default App;
