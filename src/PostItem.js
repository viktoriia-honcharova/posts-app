import { useState } from "react";
import "./App.css";

function PostItem({ post }) {
  const [show, setShow] = useState(false);

  function handleShowClick() {
    setShow(!show);
  }

  return (
    <div className="PostItem">
      <h4>
        {post.id}. {post.title}
      </h4>
      {show && <p>{post.body}</p>}
      <button onClick={handleShowClick}>Show Info</button>
    </div>
  );
}

export default PostItem;
