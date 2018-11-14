import React, { Component } from "react";
import Book from "./Book";

class Shelves extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book, i) => (
              <Book key={i} book={book} placeBook={this.props.placeBook} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelves;
