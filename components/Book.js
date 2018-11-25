import React, { Component } from "react";

class Book extends Component {

  render() {
    const { book } = this.props;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${
                  // a default image was used -- errors were thrown when
                  // attempting to pull books from the API when they didn't have an image.
                  book.imageLinks
                    ? book.imageLinks.thumbnail
                    : "https://3.bp.blogspot.com/-s3yBaPBn8Hc/Uh4-wAZOQLI/AAAAAAAAJT8/GY9d_VJFm3o/s200/play-books-no-cover.jpg"
                })`
              }}
            />
            <div className="book-shelf-changer">
              <select
                value={this.props.book.shelf ? this.props.book.shelf : ""}
                onChange={e => {this.props.placeBook(this.props.book, e.target.value)}}>
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    );
  }
}

export default Book;
