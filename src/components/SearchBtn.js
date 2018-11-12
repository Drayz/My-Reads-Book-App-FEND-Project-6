import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SearchBtn extends Component {
  render(){
    return (
      <div className='open-search'>
        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
       </div>
    )
  }
}

export default SearchBtn;
