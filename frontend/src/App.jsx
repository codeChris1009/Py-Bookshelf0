import React, { useEffect, useState } from "react";
import "./App.css";
import BookList from "./components/Book";
import AddBookForm from "./components/AddBookForm";
import api from "./api";

const App = () => {
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
    <div className="app-neon-bg">
      <header className="App-header">
        <h1
          className="bookshelf-title"
          style={{
            color: "#d18cff",
            textShadow: "0 0 10px #b56aff, 0 0 20px #6df2ff",
          }}
        >
          BookShelf
        </h1>
      </header>
      <div className="layout">
        <div className="card booklist-scroll">
          <h2 className="title_card">書籍清單</h2>
          <BookList books={books} />
        </div>
        <div className="card">
          <h2 className="title_card">新增書籍</h2>
          <AddBookForm onAddBook={addBook} />
        </div>
      </div>
    </div>
  );
};

export default App;
