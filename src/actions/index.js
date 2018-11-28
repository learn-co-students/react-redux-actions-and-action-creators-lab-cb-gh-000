// define your actions here!
export function addMovie(movie) {
  return {
    type: "ADD_MOVIE",
    movie: {
      title: "Ghostbusters"
    }
  }
}

export function deleteMovie(movie) {
  return {
    type: "DELETE_MOVIE",
    movie: {
      title: "Dead Poets Society"
    }
  }
}

export function updateUsername(newUsername) {
  return {
    type: "UPDATE_USERNAME",
    username: newUsername
  }
}

export function resetUsername() {
  return {
    type: "RESET_USERNAME",
    username: 'default'
  }
}
