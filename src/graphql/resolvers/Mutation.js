import Movie from '../models/Movie';

const Mutation = {
  createMovie: async ( _, { original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count } ) => {
    const newMovie = new Movie( { original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count } );
    return await newMovie.save()
  },
  /* deleteMovie: async ( _, { _id }) => {
    await Movie.findByIdAndRemove( _id );
    return await Movie.find();
  } */
}

export default Mutation;