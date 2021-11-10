import axios from "axios";
import React from "react";

const baseURL = "https://api.quotable.io/random";
export default function Axioce() {
  // suestate w useeffect importnakrdwa  laby awa har ba ract. krdwyaty
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  <buton onClick={() => setPost()}></buton>;

  return (
    <div>
      <h1>{post.title}</h1>
      <h1>{post.title}</h1>
      <p>{post.author}</p>
      <p>{post.dateAdded}</p>
      <p>{post.length}</p>
      {/* <p>{JSON.stringify(post)}</p> */}
    </div>
  );
}
