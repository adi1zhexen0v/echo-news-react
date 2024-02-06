import { faAngleRight, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Post() {
  return (
    <div className="post">
      <div className="post-img">
        <img src="https://placehold.co/600x400.png" alt="Новость" />
      </div>
      <div className="post-info">
        <p className="post-date">6 февраля 2024</p>
        <h2 className="post-title">Заголовок новости</h2>
        <div className="post-bottom">
          <div className="post-item">
            <FontAwesomeIcon icon={faUser} />
            <p className="post-item-name">Тест Тестов</p>
          </div>

          <div className="post-item post-link">
            <p className="post-item-name">Подробнее</p>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
