import { useEffect, useState } from "react";
import Loader from "./Loader";
import Error from "./Error";
import Post from "./Post";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  console.log(posts);

  useEffect(() => {
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

  return (
    <div className={isLoading || isError ? "" : "post-grid"}>
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
