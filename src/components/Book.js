import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
