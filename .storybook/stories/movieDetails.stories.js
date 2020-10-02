import {storyFactory} from '../util/helpers'

import MovieDetails from "../../src/components/MovieDetails";
import Vuex from "vuex";
import movies from "../../src/store/modules/movies";

const story = storyFactory({
    components: MovieDetails
})

export default {
    component: MovieDetails,
    title: 'Movie details'
}

export const asMovieDetails = () => story({
    components: {MovieDetails},
    template: '<movie-details style="background-color: #232323" :movie="movie"/>',
    store: new Vuex.Store({
        modules: {
            movies: {
                namespaced: true,
                state: {
                    movies: [],
                    selectedMovie: {
                        poster_path: "/poster.png",
                        title: "Four rooms",
                        genres: ["Action and Adventure"],
                        release_date: 2014,
                        vote_average: 4.3,
                        overview: "This movie features",
                        runtime: 120
                    }
                }
            }
        }
    })
})
