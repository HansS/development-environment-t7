// Dependencies.
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Actions.
import selectBook from '../../actions/select_book'

class BookList extends Component {
  renderList () {
    const selectBook = this.props.selectBook.bind(this)

    return this.props.books.map(function (book, i) {
      const title = book.title

      return (
        <li
          key={i}
          onClick={function () {
            selectBook(book)
          }}
        >
          {title}
        </li>
      )
    })
  }

  render () {
    const list = this.renderList()

    return (
      <div className='t7-book-list'>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

// Validation.
BookList.propTypes = {
  books: React.PropTypes.array,
  selectBook: React.PropTypes.func
}

function mapStateToProps (state) {
  return {
    books: state.books
  }
}

function mapDispatchToProps (dispatch) {
  const o = {
    selectBook: selectBook
  }

  return bindActionCreators(o, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
