import { useEffect, useState } from "react";
import Loader from "./Loader";
import Error from "./Error";
import Post from "./Post";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // setIsLoading(true);
    // fetch("https://alphaedu.portfolio-adilzhexenov.kz/news")
    //   .then((res) => res.json())
    //   .then((data) => setPosts(data))
    //   .catch((err) => setIsError(true))
    //   .finally(() => {
    //     setIsLoading(false);
    //   });

    // State Manager - Redux Toolkit

    async function fetchPosts() {
      try {
        setIsLoading(true);
        const res = await fetch(
          "https://alphaedu.portfolio-adilzhexenov.kz/news"
        );
        const data = await res.json();
        setPosts(data);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <div className={isLoading ? "" : "post-grid"}>
      {isLoading ? (
        <Loader />
      ) : (
        posts.map((post) => <Post post={post} key={post._id} />)
      )}
      {isError && <Error />}
    </div>
  );
}

export default PostList;
