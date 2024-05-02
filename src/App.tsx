import { BlogContext } from "./context/context";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState<Array<object>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <div>
      <BlogContext.Provider
        value={{ posts, setPosts, isLoading, setIsLoading }}
      >
        <Outlet/>
      </BlogContext.Provider>
    </div>
  );
}

export default App;
