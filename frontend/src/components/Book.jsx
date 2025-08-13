import React, { useEffect, useState } from "react";
import AddBookForm from "./AddBookForm";
import api from "../api";

const BookList = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await api.get("/bookshelf");
      setBooks(response.data.books);
    } catch (error) {
      console.error("Error fetching books", error);
    }
  };

  const addBook = async (book) => {
    try {
      console.log("送出的 book：", book);
      await api.post("/book", book);
      fetchBooks();
    } catch (error) {
      console.error("Error adding book ", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Books List</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.title}</li>
        ))}
      </ul>
      <AddBookForm onAddBook={addBook} />
    </div>
  );
};

export default BookList;
