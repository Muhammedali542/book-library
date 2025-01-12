import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Main() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim()) {
      navigate("/results", { state: { searchQuery: search } });
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
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
            <button onClick={handleSearch}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
