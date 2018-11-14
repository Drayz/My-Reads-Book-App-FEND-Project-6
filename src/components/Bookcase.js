import React, { Component } from "react";
import SearchBtn from "./SearchBtn";
import Shelves from "./Shelves";

class Bookcase extends Component {
  componentWillReceiveProps = props => {
    console.log(props);
  };

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div>
                <Shelves
                  placeBook={this.props.placeBook}
                  books={this.props.books.filter(b => b.shelf === "currentlyReading")}
                  shelf={"Currently Reading"}
                />
                <Shelves
                  placeBook={this.props.placeBook}
                  books={this.props.books.filter(b => b.shelf === "wantToRead")}
                  shelf={"Want to Read"}
                />
                <Shelves
                  placeBook={this.props.placeBook}
                  books={this.props.books.filter(b => b.shelf === "read")}
                  shelf={"Read"}
                />
              </div>
            </div>
          </div>
          <SearchBtn />
        </div>
      </div>
    );
  }
}

export default Bookcase;
