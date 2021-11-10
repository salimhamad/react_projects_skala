import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

export default function DogAPI() {
  const [dog, setDog] = useState([]);
  //   ale object y bonery boya aw dwkawana krawatawane[]

  //   useEffect(() => {
  //     getdog();
  //   }, []);
  // regry la lopp kat bo awway rerender nabet ta click akay

  useEffect(() => {
    getdog();
  }, []);

  function getdog() {
    // GET request using axios inside useEffect React hook
    //  {"message":"https:\/\/images.dog.ceo\/breeds\/sheepdog-shetland\/n02105855_10608.jpg","status":"success"} --->>>https://dog.ceo/api/breeds/image/random
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => setDog(response.data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }

  return (
    <div>
      {/* {dog.status} */}
      {dog.status}
      {dog.message}

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={dog.message} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={getdog}>
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
