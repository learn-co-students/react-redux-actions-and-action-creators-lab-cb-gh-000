// define your actions here!
export function addMovie(movie) {
  return {
    type: 'ADD_MOVIE',
    movie: {
      title: movie.title,
    },
  };
};

export function deleteMovie(movie) {
  return {
    type: 'DELETE_MOVIE',
    movie: {
      title: movie.title,
    },
  };
};

export function updateUsername(username) {
  return {
    type: 'UPDATE_USERNAME',
    username: 'Miles',
  };
};

export function resetUsername(username) {
  return {
    type: 'RESET_USERNAME',
    username: 'default',
  };
};
