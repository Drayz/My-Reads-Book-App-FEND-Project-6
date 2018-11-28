import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";

export default class Search extends Component {
  state = {
    query: "",
    scanBooks: []
  };

  // This function handles the state the query is in
  // then calls the scanBooks method with query passed
  // an argument to get back an array of books
  // that match the input value
  handleQuery = query => {
    this.setState({ query }, () => this.scanBooks(query));
  };

  scanBooks = query => {
    //This handle the state of the query if the input is blank
    //then set the state of the scanBooks to an empty array.
    if (query === "") {
      this.setState({
        scanBooks: []
      });
    } else {
      //We call on the BookAPI.search method
      BooksAPI.search(query).then(scanBooks => {
        scanBooks.forEach(newBook => {
          //This compares the book.ids of oldbooks on shelf
          // and the newbook in the query
          this.props.books.find(oldBook => {
            if (newBook.id === oldBook.id) {
              return newBook.shelf = oldBook.shelf;
            }
            return newBook;
          });
        });
        this.setState({
          scanBooks
        });
      });
    }
  };

  render() {
    const { placeBook } = this.props;
    const { scanBooks } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              autoFocus
              value={this.state.query}
              onChange={e => {
                this.handleQuery(e.target.value);
              }}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ul className="books-grid">
            {scanBooks.map(book => {
              return <Book book={book} key={book.id} placeBook={placeBook} />;
            })}
            {scanBooks.length === 0 && (
              <h1 style={{ textAlign: "center" }}>No results were matched</h1>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
