import { useState, useEffect } from "react";
import axiosInstance from "../services/axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import PostList from "../components/PostList";

function NewsPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="container">
      <h2 className="app-title">Новости</h2>
      <PostList posts={posts} />
    </div>
  );
}

export default NewsPage;
