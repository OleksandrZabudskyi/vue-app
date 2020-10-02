import {storyFactory} from '../util/helpers'

import MovieSearchResult from "../../src/components/MovieSearchResult";
import Vuex from "vuex";
import movies from "../../src/store/modules/movies";

const story = storyFactory({
    components: MovieSearchResult
})

export default {
    component: MovieSearchResult,
    title: 'Movie Search Result'
}

export const asMovieSearchResult = () => story({
    components: {MovieSearchResult},
    template: '<movie-search-result/>',
    store: new Vuex.Store({
        modules: {
            movies
        }
    })
})
