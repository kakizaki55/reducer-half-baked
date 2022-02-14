export default function countReducer(count, action) {
  switch (action.type) {
    case 'increment': {
      return count + 1
    }
    case 'decrement': {
      return count - 1
    }
    case 'reset': {
      return 0
    }
    default: {
      throw Error(`Unknown action: ${action.type}`)
    }
  }
}
