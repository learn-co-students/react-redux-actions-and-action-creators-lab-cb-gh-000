// define your actions here!
export function addMovie(){
  return {
    type: 'ADD_MOVIE',
    movie:{
      title:'Ghostbusters'
    }
  }
}
// define your actions here!
export function deleteMovie(){
  return {
    type: 'DELETE_MOVIE',
    movie:{
      title:'Dead Poets Society'
    }
  }
}
// define your actions here!
export function updateUsername(username){
  return {
    type: 'UPDATE_USERNAME',
    username:username
  }
}
// define your actions here!
export function resetUsername(){
  return {
    type: 'RESET_USERNAME',
      username:'default'
  }
}
