import {storyFactory} from '../util/helpers'

import Header from "../../src/components/Header";
import Vuex from "vuex";
import movies from "../../src/store/modules/movies";

const story = storyFactory({
    components: Header
})

export default {
    component: Header,
    title: 'Header'
}

export const asToolBar = () => story({
    components: {Header},
    template: '<Header style="background-color: #232323"></Header>',
    store: new Vuex.Store({
        modules: {
            movies
        }
    })
})
