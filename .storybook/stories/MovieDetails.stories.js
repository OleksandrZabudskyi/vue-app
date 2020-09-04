import {storyFactory} from '../util/helpers'

import MovieDetails from "../../src/components/MovieDetails";

const story = storyFactory({
    components: MovieDetails
})

export default {
    component: MovieDetails,
    title: 'Movie details'
}

export const asMovieDetails = () => story({
    components: {MovieDetails},
    template: '<movie-details :movie="movie"/>',
    computed: {
        movie: () => ({
            poster: "/poster.png",
            title: "Four rooms",
            genre: "Action and Adventure",
            rating: 5.0,
            duration: 240,
            releaseYear: 2019,
            description: "This movie features the collaborative directorial efforts of four"
        })
    }
})
