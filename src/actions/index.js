// define your actions here!
export function addMovie(movie){
  return {
    type: 'ADD_MOVIE',
    movie : {
      title: movie.title
    }
  };
}

//Delete an existing movie
export function deleteMovie(){
  return {
    type: 'DELETE_MOVIE',
    movie: {
      title: 'Dead Poets Society'
    }
  };
}

//Update their username
export function updateUsername(username){
  return {
    type: 'UPDATE_USERNAME',
    username
  };
}

//Reset their username to the default username of 'default'
export function resetUsername(){
  return {
    type: 'RESET_USERNAME',
    username: 'default'
  };
}
