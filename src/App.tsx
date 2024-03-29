import { useState } from "react";
import PostCard from "./components/PostCard";
import { useGetPostsQuery, usePostPostsMutation } from "./redux/api";

const App = () => {
  // states of form
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // handler for form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const post: Post = {
      title,
      body,
      userId: Math.random() * 1000,
      id: Math.random() * 1000,
    };
    console.log(title, body);
    postPosts(post);
    resetForm();
  };

  // reset form
  const resetForm = () => {
    setTitle("");
    setBody("");
  };

  const { isFetching, isError, isSuccess, data, error } = useGetPostsQuery("");

  const [postPosts] = usePostPostsMutation();
  console.log({ isFetching, isError, isSuccess, data, error });
  return (
    <div>
      {/* form starts */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="body"
          onChange={(e) => {
            setBody(e.currentTarget.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      {/* form ends */}
      {isFetching ? (
        <p>Loading..</p>
      ) : isError ? (
        <p>Error!</p>
      ) : (
        isSuccess &&
        data.map((post: Post) => (
          <PostCard
            title={post.title}
            body={post.body}
            id={post.id}
            userId={post.userId}
            key={post.id}
          />
        ))
      )}
    </div>
  );
};

export default App;
