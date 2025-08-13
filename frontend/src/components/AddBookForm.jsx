import { useState } from "react";

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
      <input
        name="isbn"
        value={book.isbn}
        onChange={handleChange}
        placeholder="ISBN"
      />
      <input
        name="lang"
        value={book.lang}
        onChange={handleChange}
        placeholder="Language"
      />
      <input
        name="title"
        value={book.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        name="author"
        value={book.author}
        onChange={handleChange}
        placeholder="Author"
      />
      <input
        name="category"
        value={book.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <input
        name="year"
        value={book.year}
        onChange={handleChange}
        placeholder="Year"
        type="number"
      />
      <input
        name="ordinalVolume"
        value={book.ordinalVolume}
        onChange={handleChange}
        placeholder="Ordinal Volume"
        type="number"
      />
      <label>
        Read:
        <input
          name="isRead"
          type="checkbox"
          checked={book.isRead}
          onChange={handleChange}
        />
      </label>
      <input
        name="star"
        value={book.star}
        onChange={handleChange}
        placeholder="Star"
        type="number"
        step="0.1"
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
