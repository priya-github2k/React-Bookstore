import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as action from '../actions';
import { categories } from '../containers/BooksForm';

const CategoryFilter = (props) => {
  const { category, handleFilterChange } = props;

  const filters = [...categories, 'All'];

  return (
    <div>
      <select
        name="categories"
        value={category}
        onChange={handleFilterChange}
        className="btn btn-secondary dropdown-toggle"
      >
        {filters.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  category: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  category: state.filterReducer,
});

export default connect(mapStateToProps, action)(CategoryFilter);
