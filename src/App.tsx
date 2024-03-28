import PostCard from "./components/PostCard";
import { useGetPostsQuery } from "./redux/api";

const App = () => {
  const { isFetching, isError, isSuccess, data, error } = useGetPostsQuery("");
  console.log({ isFetching, isError, isSuccess, data, error });
  return (
    <div>
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
