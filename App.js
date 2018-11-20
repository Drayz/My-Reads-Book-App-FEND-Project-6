import React from "react";
import BookCase from "./components/Bookcase";
import * as BooksAPI from "./BooksAPI";
import Search from "./components/Search";
import { Route } from "react-router-dom";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentWillMount = () => {
    BooksAPI.getAll()
      .then(res => {this.setState({ books: res },
          () => console.log(this.state)
        );
      })
      .catch(error => {
        console.log(error);
      });
  };

  placeBook = (book, shelf) => {
    console.log(book, shelf);
    BooksAPI.update(book, shelf)
    .then( resp => {
      book.shelf = shelf;
      this.setState(state => ({books: state.books.filter(b => b.id !== book.id).concat(book)
      }));
    });
  }
    // <-- want to make use of BooksAPI `update` function
    // and pass as props from App down to Book, ultimately
    // flesh out rest of this method to ensure the main page updates after a book is placed -- note that this
    // will also need to happen when a SearchPage book is placed using this method, too (Don't Repeat Yourself -- use this method on SearchPage, passed
    // as a prop below)


  // search on searchPage

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <BookCase placeBook={this.placeBook} books={this.state.books} />
          )}
        />
        <Route
          path="/search"
          render={() => <Search placeBook={this.placeBook} />}
        />
      </div>
    );
  }
}

export default BooksApp;
