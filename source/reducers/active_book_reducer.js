export default function (state = null, action = null) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
  }
  return state
}
