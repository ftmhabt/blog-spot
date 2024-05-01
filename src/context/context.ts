import { createContext } from "react";

interface Blog {
    posts: Array<object>|null;
    setPosts: React.Dispatch<React.SetStateAction<Array<object>|null>>;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BlogContext = createContext<Blog>({ posts: [], setPosts: () => {},isLoading:true,setIsLoading: () => {}});

