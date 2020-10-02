import {storyFactory} from '../util/helpers'

import SearchBar from "../../src/components/SearchBar";
import Vuex from "vuex";
import movies from "../../src/store/modules/movies";

const story = storyFactory({
    components: SearchBar
})

export default {
    component: SearchBar,
    title: 'Search Bar'
}

export const asSearchBar = () => story({
    components: {SearchBar},
    template: '<search-bar style="background-color: #232323"/>',
    store: new Vuex.Store({
        modules: {
            movies
        }
    })
})
