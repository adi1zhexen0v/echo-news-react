function CommentInput({
  isTextarea = false,
  title,
  placeholder,
  value,
  setValue,
}) {
  return (
    <>
      <p className="comments-form-label">{title}</p>
      {isTextarea ? (
        <textarea
          type="text"
          className="comments-form-input"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      ) : (
        <input
          type="text"
          className="comments-form-input"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </>
  );
}

export default CommentInput;
