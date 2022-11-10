import { Schema, model } from "mongoose";

const movieSchema = new Schema( {
    original_language: {
      type: String,
      required: true
    },
    original_title: {
      type: String,
      required: true
    },
    overview: {
      type: String
    },
    popularity: {
      type: String
    },
    poster_path: {
      type: String
    },
    release_date: {
      type: String,
      required: true
    },  
    title: {
      type: String,
      required: true
    },
    video: {
      type: Boolean,
      default: false
    },
    vote_average: {
      type: String,
      default: false
    },
    vote_count: {
      type: String,
      default: false
    }
})

export default model("Movie", movieSchema)