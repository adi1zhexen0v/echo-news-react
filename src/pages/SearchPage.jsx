import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "../components/Loader";
import PostList from "../components/PostList";
import axiosInstance from "../services/axios";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get(
          "/news/search?searchQuery=" +
            encodeURIComponent(searchParams.get("searchQuery"))
        );
        setPosts(response.data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2 className="app-title">
            По вашему запросу было найдено следующиее количество статьей:{" "}
            {posts.length}
          </h2>
          <PostList posts={posts} />
        </>
      )}
    </div>
  );
}

export default SearchPage;
