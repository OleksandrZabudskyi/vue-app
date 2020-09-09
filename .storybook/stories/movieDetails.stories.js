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
            movies
        }
    }),
    computed: {
        movie: () => ({
            id: 447365
        })
    }
})
