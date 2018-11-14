import React, { Component } from "react";
import { Link } from "react-router-dom";
class Search extends Component {
  // state options: query & searched books that are a response from BooksAPI's search function; remember to chain the promise
  // `input` should have `onChange` handler, which cues a method on Search to store that value in state and use it to conduct the search.

  state = {
    query: "",
    searchedBooks: []
  };

  handleQuery = e => {
    const value = e.target.value;
    // setState of query === value
    // invoke searchBooks(value)
  };

  searchBooks = value => {
    // BooksAPI.search(value) function // you also need to ensure the books displayed on Search show the correct `<select>` shelf option if the book is also on the Main Page.

  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" />
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              value={this.state.value}
              onChange={this.handleQuery}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
          {/* search page books instantiated w/ `Book` component, but based on the Search component's `searchedBooks` state property */}
        </div>
      </div>
    );
  }
}

export default Search;
