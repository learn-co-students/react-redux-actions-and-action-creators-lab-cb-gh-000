// define your actions here!
// define your actions here!
export function incrementCount(){
  return {
    type: 'INCREMENT_COUNT'
  }
}export function addMovie(movie) {
  return {
    type: 'ADD_MOVIE',
    movie: {
      title: movie.title
    }
  }
}

export function deleteMovie(movie) {
  return {
    type: 'DELETE_MOVIE',
    movie: {
      title: movie.title
    }
  }
}

export function updateUsername(newName) {
  return {
    type: 'UPDATE_USERNAME',
    username: newName
  }
}

export function resetUsername() {
  return {
    type: 'RESET_USERNAME',
    username: 'default'
  }
}
