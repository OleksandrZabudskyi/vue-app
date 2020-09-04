import {storyFactory} from '../util/helpers'

import MovieSearchResult from "../../src/components/MovieSearchResult";

const story = storyFactory({
    components: MovieSearchResult
})

export default {
    component: MovieSearchResult,
    title: 'Movie Search Result'
}

export const asMovieSearchResult = () => story({
    components: {MovieSearchResult},
    template: '<movie-search-result/>'
})
