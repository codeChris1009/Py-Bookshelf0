import { useState } from "react";
import React from "react";

const initialBook = {
  isbn: "",
  lang: "",
  title: "",
  author: "",
  category: "",
  year: "",
  ordinalVolume: "",
  isRead: false,
  star: "",
};

const AddBookForm = ({ onAddBook }) => {
  const [book, setBook] = useState(initialBook);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedBook = {
      ...book,
      year: Number(book.year),
      ordinalVolume: Number(book.ordinalVolume),
      star: Number(book.star),
      isRead: Boolean(book.isRead),
    };
    if (onAddBook) onAddBook(formattedBook);
    setBook(initialBook);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="nebula-input" style={{ flex: 1 }}>
          <input
            className="input"
            type="text"
            autoComplete="off"
            name="isbn"
            value={book.isbn}
            onChange={handleChange}
            required
          />
          <span className="user-label">ISBN</span>
          <div
            className="nebula-particle"
            style={{ "--x": 0.2, "--y": -0.4, "--delay": "0.1s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.5, "--y": -0.2, "--delay": "0.3s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.3, "--y": 0.3, "--delay": "0.5s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.7, "--y": 0.1, "--delay": "0.2s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.1, "--y": -0.7, "--delay": "0.4s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.6, "--y": 0.4, "--delay": "0.6s" }}
          ></div>
        </div>
        <div className="nebula-input" style={{ flex: 1 }}>
          <input
            className="input"
            name="lang"
            autoComplete="off"
            value={book.lang}
            onChange={handleChange}
            required
          />
          <span className="user-label">Language</span>
          <div
            className="nebula-particle"
            style={{ "--x": 0.2, "--y": -0.4, "--delay": "0.1s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.5, "--y": -0.2, "--delay": "0.3s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.3, "--y": 0.3, "--delay": "0.5s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.7, "--y": 0.1, "--delay": "0.2s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.1, "--y": -0.7, "--delay": "0.4s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.6, "--y": 0.4, "--delay": "0.6s" }}
          ></div>
        </div>
      </div>
      <div className="form-row">
        <div className="nebula-input" style={{ flex: 1 }}>
          <input
            className="input"
            name="title"
            autoComplete="off"
            value={book.title}
            onChange={handleChange}
            required
          />
          <span className="user-label">Title</span>
          <div
            className="nebula-particle"
            style={{ "--x": 0.2, "--y": -0.4, "--delay": "0.1s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.5, "--y": -0.2, "--delay": "0.3s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.3, "--y": 0.3, "--delay": "0.5s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.7, "--y": 0.1, "--delay": "0.2s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.1, "--y": -0.7, "--delay": "0.4s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.6, "--y": 0.4, "--delay": "0.6s" }}
          ></div>
        </div>
        <div className="nebula-input" style={{ flex: 1 }}>
          <input
            className="input"
            name="author"
            autoComplete="off"
            value={book.author}
            onChange={handleChange}
            required
          />
          <span className="user-label">Author</span>
          <div
            className="nebula-particle"
            style={{ "--x": 0.2, "--y": -0.4, "--delay": "0.1s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.5, "--y": -0.2, "--delay": "0.3s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.3, "--y": 0.3, "--delay": "0.5s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.7, "--y": 0.1, "--delay": "0.2s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.1, "--y": -0.7, "--delay": "0.4s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.6, "--y": 0.4, "--delay": "0.6s" }}
          ></div>
        </div>
      </div>
      <div className="form-row">
        <div className="nebula-input" style={{ flex: 1 }}>
          <input
            className="input"
            name="category"
            autoComplete="off"
            value={book.category}
            onChange={handleChange}
            required
          />
          <span className="user-label">Category</span>
          <div
            className="nebula-particle"
            style={{ "--x": 0.2, "--y": -0.4, "--delay": "0.1s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.5, "--y": -0.2, "--delay": "0.3s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.3, "--y": 0.3, "--delay": "0.5s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.7, "--y": 0.1, "--delay": "0.2s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.1, "--y": -0.7, "--delay": "0.4s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.6, "--y": 0.4, "--delay": "0.6s" }}
          ></div>
        </div>
        <div className="nebula-input" style={{ flex: 1 }}>
          <input
            className="input"
            name="year"
            autoComplete="off"
            value={book.year}
            onChange={handleChange}
            placeholder="Year"
            type="number"
            required
          />
          <span className="user-label">Year</span>
          <div
            className="nebula-particle"
            style={{ "--x": 0.2, "--y": -0.4, "--delay": "0.1s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.5, "--y": -0.2, "--delay": "0.3s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.3, "--y": 0.3, "--delay": "0.5s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.7, "--y": 0.1, "--delay": "0.2s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.1, "--y": -0.7, "--delay": "0.4s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.6, "--y": 0.4, "--delay": "0.6s" }}
          ></div>
        </div>
      </div>
      <div className="form-row">
        <div className="nebula-input" style={{ flex: 1 }}>
          <input
            className="input"
            name="ordinalVolume"
            autoComplete="off"
            value={book.ordinalVolume}
            onChange={handleChange}
            placeholder="Ordinal Volume"
            type="number"
            required
          />
          <span className="user-label">Ordinal Volume</span>
          <div
            className="nebula-particle"
            style={{ "--x": 0.2, "--y": -0.4, "--delay": "0.1s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.5, "--y": -0.2, "--delay": "0.3s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.3, "--y": 0.3, "--delay": "0.5s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.7, "--y": 0.1, "--delay": "0.2s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.1, "--y": -0.7, "--delay": "0.4s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.6, "--y": 0.4, "--delay": "0.6s" }}
          ></div>
        </div>
        <div className="nebula-input" style={{ flex: 1 }}>
          <input
            className="input"
            name="star"
            autoComplete="off"
            value={book.star}
            onChange={handleChange}
            placeholder="Star"
            type="number"
            step="0.1"
            required
          />
          <span className="user-label">Star</span>
          <div
            className="nebula-particle"
            style={{ "--x": 0.2, "--y": -0.4, "--delay": "0.1s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.5, "--y": -0.2, "--delay": "0.3s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.3, "--y": 0.3, "--delay": "0.5s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.7, "--y": 0.1, "--delay": "0.2s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.1, "--y": -0.7, "--delay": "0.4s" }}
          ></div>
          <div
            className="nebula-particle"
            style={{ "--x": 0.6, "--y": 0.4, "--delay": "0.6s" }}
          ></div>
        </div>
      </div>
      <div className="form-row" style={{ alignItems: "center" }}>
        {/* isRead checkbox 欄位 */}
        <div className="checkbox">
          <input
            id="isRead"
            className="checkbox__input"
            name="isRead"
            type="checkbox"
            checked={book.isRead}
            onChange={handleChange}
          />
          <label htmlFor="isRead" className="checkbox__label">
            <span className="checkbox__custom" />
            Is Reading ?
          </label>
        </div>
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
