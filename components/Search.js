import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from "../BooksAPI";

class Search extends Component {
  // state options: query & searched books that are a response from BooksAPI's search function; remember to chain the promise
  // `input` should have `onChange` handler, which cues a method on Search to store that value in state and use it to conduct the search.

  state = {
    query: "",
    searchBooks: []
  };

  handleQuery = e => {
    const value = e.target.value;
    this.searchBooks(value);
    // setState of query === value
    // invoke searchBooks(value)
  };

  searchBooks = value => {
    BooksAPI.search(value).then(res => {
      this.props.books.forEach(book => {
        res.forEach(newBook => {
          if (book.id === newBook.id) {
            newBook.shelf = book.shelf;
          }
          return newBook;
        });
      });
      this.setState(
        {searchBooks: res}
      );
    });
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
          {this.state.searchBooks.map(book => {
            return (
              <Book book={book} key={book.id} handleQuery={this.props.handleQuery}
              />
            );
          })}
          {this.state.searchBooks.length === 0 && (
            <h1 style={{textAlign:"center"}}>No results were found</h1>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
