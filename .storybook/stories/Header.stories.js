import {storyFactory} from '../util/helpers'

import Header from "../../src/components/Header";

const story = storyFactory({
    components: Header
})

export default {
    component: Header,
    title: 'Header'
}

export const asToolBar = () => story({
    components: {Header},
    template: '<Header style="background-color: #232323"></Header>'
})