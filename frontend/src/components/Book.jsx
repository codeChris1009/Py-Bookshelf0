import React from "react";

const BookList = ({ books }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, width: "100%" }}>
      {books.map((book, index) => (
        <li
          key={index}
          style={{
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="notification book-card">
            <div className="notiglow" />
            <div className="notiborderglow" />
            <div className="notititle">{book.title || "(無書名)"}</div>
            <div className="notibody">
              <div>Author： {book.author || "-"}</div>
              <div>ISBN： {book.isbn || "-"}</div>
              <div>Lang： {book.lang || "-"}</div>
              <div>Category： {book.category || "-"}</div>
              <div>Issue Year： {book.year || "-"}</div>
              <div>Volume： {book.ordinalVolume || "-"}</div>
              <div>Rate Star： {book.star || "-"}</div>
              <div>Is Reading： {book.isRead ? "✔" : "✘"}</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
