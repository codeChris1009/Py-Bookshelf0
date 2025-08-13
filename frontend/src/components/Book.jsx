const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book, index) => (
        <li key={index}>{book.title}</li>
      ))}
    </ul>
  );
};

export default BookList;
