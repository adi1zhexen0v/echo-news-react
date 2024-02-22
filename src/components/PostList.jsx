import Post from "./Post";

function PostList({ posts }) {
  return (
    <div className="post-grid">
      {posts.map((post) => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
}

export default PostList;
