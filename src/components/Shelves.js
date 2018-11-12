import React, {Component} from 'react'
import Book from './Book'

class Shelves extends Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <Book />
            <Book />
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelves;
