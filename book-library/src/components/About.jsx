import React from "react";
import "./style.css";

function About() {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Book Library</h1>
      </div>
      <div className="about-content">
        <p>
          Welcome to <strong>Book Library</strong>, your ultimate destination for exploring, 
          discovering, and learning about books. Whether you’re a casual reader or a 
          passionate bibliophile, our platform offers:
        </p>
        <ul>
          <li>Search for books by title, author, or keyword.</li>
          <li>Access detailed information about your favorite books.</li>
          <li>Save and explore a curated collection of books.</li>
        </ul>
        <p>
          <strong>Why Choose Us?</strong>
        </p>
        <ul>
          <li>Wide variety of books from multiple genres.</li>
          <li>Easy-to-use interface with advanced search capabilities.</li>
          <li>Seamless navigation to enhance your reading experience.</li>
        </ul>
        <p>
          Our mission is to make knowledge accessible and foster a love for reading among people of all ages. 
          Dive into the world of books and explore endless possibilities with us.
        </p>
        <p>
          <strong>Happy Reading!</strong>
        </p>
      </div>
    </div>
  );
}

export default About;
