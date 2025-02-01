import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useLocation } from "react-router-dom";

function ResultsPage() {
  const location = useLocation();
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(false); // ✅ Track loading state

  useEffect(() => {
    if (location.state?.searchQuery) {
      fetchBooks(location.state.searchQuery);
    }
  }, [location.state]);

  const fetchBooks = (query) => {
    setLoading(true); // ✅ Start loading before fetching
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        query
      )}&key=AIzaSyCaCTlAJDzbkf382iXc_KfrxVro3CoHjxk&maxResults=40`
    )
      .then((res) => res.json())
      .then((data) => {
        setBookData(data.items || []);
        setLoading(false); // ✅ Stop loading when fetch is done
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false); // ✅ Stop loading even if there's an error
      });
  };

  return (
    <div className="container">
      {loading ? ( // ✅ Show "Loading..." while fetching
        <p className="text-center text-black font-bold">Loading...</p>
      ) : bookData.length > 0 ? (
        <Card book={bookData} />
      ) : (
        <p className="text-center text-black font-bold">No books found</p>
      )}
    </div>
  );
}

export default ResultsPage;
