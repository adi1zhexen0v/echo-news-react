import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../utils/utils";
import Loader from "../components/Loader";
import Error from "../components/Error";

function ArticlePage() {
  const params = useParams();
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  console.log(post);

  useEffect(() => {
    async function fetchPost() {
      try {
        setIsLoading(true);
        const res = await fetch(
          "https://alphaedu.portfolio-adilzhexenov.kz/news/" + params.id
        );
        const data = await res.json();
        setPost(data);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPost();
  }, [params.id]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="container">
      <div className="article">
        <div className="article-part">
          <img src={post.imageUrl} alt="Article" className="article-img" />
          <h2 className="article-title">{post.title}</h2>
          <div className="article-info">
            <div className="article-info-item">
              <FontAwesomeIcon icon={faUser} />
              {post.author}
            </div>
            <div className="article-info-item">
              <FontAwesomeIcon icon={faCalendar} />
              {formatDate(post.datePublished)}
            </div>
          </div>
          <ul className="article-tags-list">
            {post.tags &&
              post.tags.map((tag) => (
                <li className="article-tags-item">{tag}</li>
              ))}
          </ul>
          <p className="article-text">{post.content}</p>
        </div>
        <div className="article-part"></div>
      </div>
    </div>
  );
}

export default ArticlePage;
