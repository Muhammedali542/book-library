import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useLocation } from "react-router-dom";

function ResultsPage() {
  const location = useLocation();
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    if (location.state?.searchQuery) {
      fetchBooks(location.state.searchQuery);
    }
  }, [location.state]);

  const fetchBooks = (query) => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        query
      )}&key=AIzaSyCaCTlAJDzbkf382iXc_KfrxVro3CoHjxk&maxResults=40`
    )
      .then((res) => res.json())
      .then((data) => setBookData(data.items || []))
      .catch((err) => console.error("Error fetching data:", err));
  };

  return (
    <div className="container">
      {bookData.length ? <Card book={bookData} /> : <p>No books found</p>}
    </div>
  );
}

export default ResultsPage;
