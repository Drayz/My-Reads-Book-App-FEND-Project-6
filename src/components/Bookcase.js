import React, {Component} from 'react'
import SearchBtn from './SearchBtn'
import Shelves from './Shelves'

class Bookcase extends Component {

  render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelves />
                <Shelves />
                <Shelves />
              </div>
            </div>
            <SearchBtn />
          </div>
      </div>
    )
  }
}

export default Bookcase;
