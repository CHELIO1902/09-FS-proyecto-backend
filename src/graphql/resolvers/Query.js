import Movie from '../models/Movie'

const Query = {
  ping() {
    return "pong"
  },

  getMovie: async() => {
    return await Movie.find()
  }
}

export default Query;