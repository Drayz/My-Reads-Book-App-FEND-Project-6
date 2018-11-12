import React, {Component} from 'react'
import SearchBtn from './SearchBtn'
import Shelves from './Shelves'
import { getAll } from '../BooksAPI'

class Bookcase extends Component {
  async componenDidUpdate() {
    const getBooks = getAll();
    this.props.addBooks(getBooks);
  } catch(error) {
    console.log(error);
  }

  state = {
    books:[],
    currentlyReading:[],
    wantToRead:[],
    read:[]
  }

  render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelves name="Currently Reading"/>
                <Shelves name="Want to Read"/>
                <Shelves name="Read"/>
              </div>
            </div>
            <SearchBtn />
          </div>
      </div>
    )
  }
}

export default Bookcase;
