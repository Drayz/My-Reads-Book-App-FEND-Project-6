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

  //Making an Api call to Books.API to get the book data
  //if it cannot get the data then we have a catch error
  componentDidMount = () => {
    BooksAPI.getAll()
      .then(res => {
        this.setState({ books: res }, () => console.log(this.state));
      })
      .catch(error => {
        console.log(error);
      });
  };

  //This functions places books on shelf based on option selected
  placeBook = (book, shelf) => {
    console.log(book, shelf);
    BooksAPI.update(book, shelf).then(resp => {
      if (resp.error) {
        this.setState({
          books: []
        });
      }
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat(book)
      }));
    });
  };

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
          render={() => (
            <Search books={this.state.books} placeBook={this.placeBook} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;

