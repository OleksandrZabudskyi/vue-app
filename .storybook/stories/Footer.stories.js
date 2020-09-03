import {storyFactory} from '../util/helpers'

import Footer from "../../src/components/Footer";

const story = storyFactory({
    components: Footer
})

export default {
    component: Footer,
    title: 'Footer'
}

export const asFooter = () => story({
    components: {Footer},

    template: '<Footer></Footer>'
})
