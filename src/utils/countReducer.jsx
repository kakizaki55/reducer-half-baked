export default function countReducer(banana, action) {
  switch (action.type) {
    case 'increment': {
      return banana + 1
    }
    case 'decrement': {
      return banana - 1
    }
    case 'reset': {
      return 0
    }
    default: {
      throw Error(`Unknown action: ${action.type}`)
    }
  }
}
