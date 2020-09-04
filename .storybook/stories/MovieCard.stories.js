import {storyFactory} from '../util/helpers'

import MovieCard from "../../src/components/MovieCard";

const story = storyFactory({
    components: MovieCard
})

export default {
    component: MovieCard,
    title: 'Movie card'
}

export const asMovieCard = () => story({
    components: {MovieCard},
    template: '<movie-card style="background-color: #232323" :movie="movie"/>',
    computed: {
        movie: () => ({
            poster: "/poster.png",
            title: "Kill Bill",
            genre: "Oscar Movie",
            releaseYear: "2020"
        })
    }
})
