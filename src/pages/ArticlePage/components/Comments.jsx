import { useState } from "react";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";

// "/news/:id/comments"
// {
//   fullName: "string",
//   text: "string",
//   rating: "number"
// }

function Comments({ comments, newsId, setValue, value }) {
  const [fullName, setFullName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  async function sendComment(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://alphaedu.portfolio-adilzhexenov.kz/news/${newsId}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            text,
            rating,
          }),
        }
      );
      const data = await res.json();
      setValue({ ...value, comments: [...value.comments, data] });
      console.log(data);
      setFullName("");
      setText("");
      setRating(0);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <form className="comments-form" onSubmit={(e) => sendComment(e)}>
        <h3 className="comments-form-title">Добавить комментарий</h3>
        <CommentInput
          title="Полное имя"
          placeholder="Введите ваше имя"
          value={fullName}
          setValue={setFullName}
        />
        <CommentInput
          isTextarea={true}
          title="Ваш комментарий"
          placeholder="Введите ваш комментарий"
          value={text}
          setValue={setText}
        />
        <CommentInput
          type="number"
          title="Рейтинг"
          placeholder="Введите вашу оценку статьи"
          value={rating}
          setValue={setRating}
        />
        <div className="comments-form-bottom">
          <button className="comments-form-button" type="submit">
            Оставить комментарий
          </button>
          {isLoading && "Загрузка..."}
        </div>
      </form>

      <div className="comments">
        <div className="comments-list">
          <h2 className="comments-form-title">Комментарии</h2>
          {comments &&
            comments.map((comment) => (
              <CommentItem
                key={comment._id}
                fullName={comment.fullName}
                text={comment.text}
                rating={comment.rating}
                createdAt={comment.createdAt}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Comments;
