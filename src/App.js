import React, { useState, useEffect } from "react";
import Card from "./Card";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.slice(0, 10));
      })
      .catch((error) => {
        console.log("Error fetching posts:", error);
      });
  };

  const handleAddPost = () => {
    if (newPostTitle.trim() === "" || newPostBody.trim() === "") {
      alert("Please enter a title and body for the post.");
      return;
    }

    const newPost = {
      title: newPostTitle,
      body: newPostBody,
      userId: 1,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts([data, ...posts]);
        setNewPostTitle("");
        setNewPostBody("");
        setShowPopup(false);
      })
      .catch((error) => {
        console.log("Error adding post:", error);
        alert("Post adding failed.");
      });
  };

  const addPostButtonStyle = {
    color: "white",

    width: "300px",
    height: "50px",
    fontSize: "30px",
    margin: "20px auto 20px auto",
    display: "block",
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "black",
  };

  const popupStyle = {
    backgroundColor: "#f8f9fa",
    border: "1px solid #ccc",
    borderRadius: "20px",
    padding: "20px",
    width: "400px",
    margin: "20px auto",
  };

  return (
    <div className="container">
      <div className="row">
        {posts.map((post) => (
          <Card key={post.id} title={post.title} body={post.body} />
        ))}
      </div>

      {showPopup && (
        <div style={popupStyle}>
          <h3>Add Post</h3>
          <div className="form-group">
            <label
              htmlFor="titleInput"
              style={{
                fontSize: "20px",
                marginRight: "10px",
              }}
            >
              Title
            </label>
            <input
              type="text"
              className="form-control"
              style={{
                width: "300px",
                height: "40px",
                fontSize: "20px",
                marginRight: "10px",marginLeft: "7px",

                borderRadius: "10px",
              }}
              id="titleInput"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="bodyInput"
              style={{
                fontSize: "20px",
                marginRight: "10px",
                marginTop: "10px",
              }}
            >
              Body
            </label>
            <textarea
              className="form-control"
              style={{
                width: "300px",
                height: "100px",
                fontSize: "15px",
                marginRight: "10px",
                marginTop: "10px",
                borderRadius: "10px",
              }}
              id="bodyInput"
              rows="3"
              value={newPostBody}
              onChange={(e) => setNewPostBody(e.target.value)}
            ></textarea>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              className="btn btn-secondary"
              style={{
                width: "100px",
                height: "40px",
                fontSize: "20px",
                marginRight: "10px",
                borderRadius: "10px",
              }}
              onClick={() => setShowPopup(false)}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary"
              style={{
                width: "100px",
                height: "40px",
                fontSize: "20px",
                marginRight: "10px",
                borderRadius: "10px",
              }}
              onClick={handleAddPost}
            >
              Post
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        className="btn btn-primary"
        style={addPostButtonStyle}
        onClick={() => setShowPopup(true)}
      >
        Add Post
      </button>
    </div>
  );
};

export default App;
