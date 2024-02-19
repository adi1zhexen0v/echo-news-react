import { useEffect, useState } from "react";
import Loader from "./Loader";
import Error from "./Error";
import Post from "./Post";
import axiosInstance from "../services/axios";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  console.log(posts);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get("/news");
        setPosts(response.data);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className={isLoading || isError ? "" : "post-grid"}>
      {isLoading ? (
        <Loader />
      ) : (
        posts.map((post) => <Post post={post} key={post._id} />)
      )}
      {isError ? <Error /> : null}
    </div>
  );
}

export default PostList;
