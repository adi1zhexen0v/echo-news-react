import { faAngleRight, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ARTICLE_PAGE_ROUTE } from "../utils/consts";
import { formatDate } from "../utils/utils";

function Post({ post }) {
  return (
    <div className="post">
      <div className="post-img">
        <img src={post.imageUrl} alt="Новость" />
      </div>
      <div className="post-info">
        <p className="post-date">{formatDate(post.datePublished)}</p>
        <h2 className="post-title">{post.title}</h2>
        <div className="post-bottom">
          <div className="post-item">
            <FontAwesomeIcon icon={faUser} />
            <p className="post-item-name">{post.author}</p>
          </div>
          <Link
            to={
              ARTICLE_PAGE_ROUTE.substring(0, ARTICLE_PAGE_ROUTE.length - 3) +
              post._id
            }
            className="post-item post-link"
          >
            <p className="post-item-name">Подробнее</p>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Post;
