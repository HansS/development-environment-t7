import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render () {
    if (!this.props.book) {
      return (
        <div className='t7-book-details'>
          <p>
            Select a book to get started.
          </p>
        </div>
      )
    }

    return (
      <div className='t7-book-details'>
        <h3>
          Details for:
        </h3>
        <p>
          Title: {this.props.book.title}
        </p>
        <p>
          Pages: {this.props.book.pages}
        </p>
      </div>
    )
  }
}

// Validation.
BookDetail.propTypes = {
  book: React.PropTypes.object
}

function mapStateToProps (state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)
