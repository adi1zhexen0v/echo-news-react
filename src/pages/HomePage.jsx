import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../services/axios";
import { NEWS_PAGE_ROUTE } from "../utils/consts";
import homeSplashImage from "../assets/img/home_splash.png";
import Loader from "../components/Loader";
import PostList from "../components/PostList";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get("/news/latest");
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
      <div className="home">
        <div className="home-part">
          <h6 className="home-name">EchoNews</h6>
          <h1 className="home-title">
            В Пульсе Событий: От Мировых Новостей до Местных Трендов
          </h1>
          <p className="home-text">
            Ваш надежный источник актуальной информации, объединяющий глобальные
            достижения и локальные инициативы.
          </p>
          <Link to={NEWS_PAGE_ROUTE} className="home-btn">
            Подробнее
          </Link>
        </div>
        <div className="home-part">
          <img src={homeSplashImage} alt="Home Screen" className="home-img" />
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2 className="app-title">Последние новости</h2>
          <PostList posts={posts} />
        </>
      )}
    </div>
  );
}

export default HomePage;
