import { useEffect, useState } from "react";
import PostItem from "./PostItem";

function PostsComponent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, [posts]);

  const getPosts = async () => {
    try {
      let responce = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await responce.json();
      setPosts(data);
      console.log(posts);
    } catch {}
  };

  return (
    <div className="PostsComponent">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostsComponent;
