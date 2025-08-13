import React from "react";
import "./App.css";
import BookList from "./components/Book";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>BookShelf</h1>
        <nav>
          <ul>
            <li>
              <a href="#list">書籍清單</a>
            </li>
            <li>
              <a href="#add">新增書籍</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="list">
          <BookList />
        </section>
        <section id="add"></section>
      </main>
    </div>
  );
};

export default App;
