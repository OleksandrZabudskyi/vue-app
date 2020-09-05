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
    template: '<movie-details style="background-color: #232323" :movie="movie"/>',
    computed: {
        movie: () => ({
            poster: "/poster.png",
            title: "Four rooms",
            genre: "Action and Adventure",
            rating: 5.0,
            duration: 240,
            releaseYear: 2019,
            description: "This movie features the collaborative directorial efforts of four\n" +
                "            new filmmakers, each of whom directs a segment of this comedy. It's New Year's Eve at the Mon Signor\n" +
                "            Hotel, a former grand old Hollywood hotel, now fallen upon hard times. Often using physical comedy and\n" +
                "            sight gags, this movie chronicles the slapstick misadventures of Ted, the Bellhop."
        })
    }
})
