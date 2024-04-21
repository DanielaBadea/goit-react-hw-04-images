import React from "react";
import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { IoIosSearch } from "react-icons/io";

function SearchBar ({onSubmit, query}) {
    return (
      <>
        <header className={styles.searchbar}>
          <form className={styles.form} onSubmit={onSubmit}>
					<button type="submit" className={styles.button}>
                <span className={styles['button-label']}>Search</span>
                </button>
            <IoIosSearch className={styles.icon} />
            <input
              className={styles.input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name="query"
              value={query}
            />
          </form>
        </header>
      </>
    );
  };
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
