import { Post } from "../types/post";

const PostCard = (post: Post) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <h4>{post.body}</h4>
    </div>
  );
};

export default PostCard;
