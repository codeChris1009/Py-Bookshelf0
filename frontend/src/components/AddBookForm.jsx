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
      </div>

      <div className="form-row">
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
      </div>

      <div className="form-row">
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
      </div>

      <div className="form-row">
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
        {/* star rate 欄位 */}
        <div className="rating" style={{ flex: 1 }}>
          {[5, 4, 3, 2, 1].map((num) => (
            <React.Fragment key={num}>
              <input
                type="radio"
                id={`star${num}`}
                name="star"
                value={num}
                checked={Number(book.star) === num}
                onChange={handleChange}
              />
              <label
                htmlFor={`star${num}`}
                title={
                  num === 5
                    ? "Excellent!"
                    : num === 4
                    ? "Great!"
                    : num === 3
                    ? "Good"
                    : num === 2
                    ? "Okay"
                    : "Bad"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>

      <button type="submit" className="button">
        Add Book
      </button>
    </form>
  );
};

export default AddBookForm;
