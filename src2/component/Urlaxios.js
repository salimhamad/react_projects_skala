import axios from "axios";
import React from "react";
import Button from "react-bootstrap";

const baseURL = "https://api.quotable.io/random";
export default function Urlaxios() {
  // suestate w useeffect importnakrdwa  laby awa har ba ract. krdwyaty
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    getAPIurl();
  }, []);

  if (!post) return null;

  function getAPIurl() {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }

  <button variant="success" onClick={() => getAPIurl()}>
    RondomApi
  </button>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.author}</p>
      <p>{post.dateAdded}</p>
      <p>{post.length}</p>
      {/* <p>{JSON.stringify(post)}</p> */}
    </div>
  );
}
