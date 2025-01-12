import React, { useState } from "react";
import "./style.css";
import Card from "./Card";
import axios from "axios";

function Main() {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      console.log("Searching for:", search);

      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
            search
          )}&key=AIzaSyCaCTlAJDzbkf382iXc_KfrxVro3CoHjxk` + "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.error("Error fetching data:", err));
    }
  };

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like
            <br /> a body without a soul.
          </h1>
        </div>

        <div className="row2">
          <h2>Find your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="container">{<Card book={bookData} />}</div>
    </>
  );
}

export default Main;
