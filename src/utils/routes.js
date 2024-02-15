import ArticlePage from "../pages/ArticlePage";
import HomePage from "../pages/HomePage";
import NewsPage from "../pages/NewsPage";
import NotFoundPage from "../pages/NotFoundPage";
import SettingsPage from "../pages/SettingsPage";
import {
  ARTICLE_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  NEWS_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from "./consts";

export const routes = [
  {
    path: HOME_PAGE_ROUTE,
    element: HomePage,
  },
  {
    path: NEWS_PAGE_ROUTE,
    element: NewsPage,
  },
  {
    path: SETTINGS_PAGE_ROUTE,
    element: SettingsPage,
  },
  {
    path: ARTICLE_PAGE_ROUTE,
    element: ArticlePage,
  },
  {
    path: "*",
    element: NotFoundPage,
  },
];
