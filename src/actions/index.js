// define your actions here!
export function addMovie(movie) {
	return {
		type: "ADD_MOVIE",
		movie: {
			title: movie.title
		}
	};
}

export function deleteMovie() {
	return {
		type: "DELETE_MOVIE",
		movie: {
			title: 'Dead Poets Society'
		}
	}
}

export function updateUsername(username){
	return {
		type: "UPDATE_USERNAME",
		username
	}
}

export function resetUsername() {
	return {
		type: "RESET_USERNAME",
		username: 'default'
	}
}